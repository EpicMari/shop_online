import React, { useRef, useEffect, useContext } from "react";
import emailjs from "emailjs-com";
import RootContext from "../../context/RootContext";
import { createOrderInFireStore } from "../../firebase/firestoreUtils";
import { Redirect } from "react-router-dom";
import { routes } from "../../routes";
import CartOrder from "../../components/molecules/CartOrder";
import {
  StyledAddress,
  StyledCartBox,
  StyledCartTotalInfo,
  StyledContentBox,
  StyledInfoBox,
  StyledParagraph,
  StyledPaymentHeading,
  StyledPaypalBox,
  StyledWrapper,
} from "./StyledPayment";

const Payment = ({
  location: {
    state: {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      postalCode,
      country,
      deliveryMethod,
    },
  },
}) => {
  const {
    orderValue,
    handleOrderPaid,
    isOrderPaid,
    cart,
    resetCart,
    showNotification,
  } = useContext(RootContext);
  const paypal = useRef();

  const sendEmail = (values) => {
    emailjs
      .send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_ORDER_TEMPLATE}`,
        values,
        `${process.env.REACT_APP_USER_ID}`
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "capture",
            purchase_units: [
              {
                description: "Your order",
                amount: {
                  currency_code: "USD",
                  value: orderValue,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          let dataOrder = order.create_time.slice(0, 10).replace(/-/g, ".");

          createOrderInFireStore({
            createdAt: dataOrder,
            email: `${email}`,
            name: `${firstName} ${lastName}`,
            products: cart,
            status: order.status,
            totalPrice: orderValue,
            userName: `${firstName}`,
          });

          order.status === "COMPLETED" && handleOrderPaid(true);
          sendEmail({ email, firstName, lastName });
          resetCart();
          showNotification("Successful payment", "info");
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [
    cart,
    email,
    firstName,
    handleOrderPaid,
    lastName,
    orderValue,
    resetCart,
    showNotification,
  ]);

  const deliveryName = () => {
    switch (deliveryMethod) {
      case "5":
        return "InPost";
      case "8":
        return "DHL";
      case "6":
        return "FedEx";
      default:
        return "DPD";
    }
  };

  return (
    <>
      <StyledWrapper>
        <StyledPaymentHeading headingType="h1">Summary</StyledPaymentHeading>
        <StyledContentBox>
          <StyledInfoBox>
            <StyledAddress headingType="h3">Delivery address</StyledAddress>
            <StyledParagraph size="s">First name: {firstName}</StyledParagraph>
            <StyledParagraph size="s">Last name: {lastName}</StyledParagraph>
            <StyledParagraph size="s">E-mail: {email}</StyledParagraph>
            <StyledParagraph size="s">
              Phone number: {phoneNumber}
            </StyledParagraph>
            <StyledParagraph size="s">Address: {address}</StyledParagraph>
            <StyledParagraph size="s">City: {city}</StyledParagraph>
            <StyledParagraph size="s">
              Postal code: {postalCode}
            </StyledParagraph>
            <StyledParagraph size="s">Country: {country}</StyledParagraph>
            <StyledParagraph size="s">
              Delivery method: {deliveryName()}
            </StyledParagraph>
          </StyledInfoBox>
          <StyledCartBox>
            <StyledCartTotalInfo headingType="h3">Cart</StyledCartTotalInfo>
            <CartOrder cartItems={cart} />
            <StyledCartTotalInfo headingType="h3">
              Total cost: {orderValue}
            </StyledCartTotalInfo>
          </StyledCartBox>
          <StyledPaypalBox>
            <div ref={paypal}></div>
          </StyledPaypalBox>
        </StyledContentBox>
      </StyledWrapper>
      {isOrderPaid && <Redirect to={routes.home} />}
    </>
  );
};

export default Payment;
