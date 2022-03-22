import React, { useRef, useEffect, useContext } from "react";
import Div from "../components/atoms/Div";
import RootContext from "../context/RootContext";
import Paragraph from "../components/atoms/Paragraph";
import Ul from "../components/atoms/Ul";
import Li from "../components/atoms/Li";
import Heading from "../components/atoms/Heading";
import { createOrderInFireStore } from "../firebase/firestoreUtils";
import { Redirect } from "react-router-dom";
import { routes } from "../routes";

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
          resetCart();
          showNotification("Successful payment", "info");
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <>
      <Div paymentWrapper>
        <Heading headingType="h3" paymentWrapper__heading>
          Summary
        </Heading>
        <Div paymentWrapper__content>
          <Div>
            <Paragraph paymentWrapper__text>First name: {firstName}</Paragraph>
            <Paragraph paymentWrapper__text>Last name: {lastName}</Paragraph>
            <Paragraph paymentWrapper__text>E-mail: {email}</Paragraph>
            <Paragraph paymentWrapper__text>
              Phone number: {phoneNumber}
            </Paragraph>
            <Paragraph paymentWrapper__text>Address: {address}</Paragraph>
            <Paragraph paymentWrapper__text>City: {city}</Paragraph>
            <Paragraph paymentWrapper__text>
              Postal code: {postalCode}
            </Paragraph>
            <Paragraph paymentWrapper__text>Country: {country}</Paragraph>
            <Paragraph paymentWrapper__text>
              Delivery method: {deliveryMethod}
            </Paragraph>
          </Div>
          <Div paymentWrapper__cart>
            <Heading headingType="h6" paymentWrapper__description>
              Cart
            </Heading>
            <Ul>
              {cart.map((item) => {
                return (
                  <Li paymentWrapper__cartItem>
                    <Paragraph>{item.name}</Paragraph>
                    <Paragraph>{item.price * item.inCartQuantity}$</Paragraph>
                  </Li>
                );
              })}
            </Ul>
            <Heading headingType="h5" paymentWrapper__orderValue>
              Total cost: {orderValue}
            </Heading>
          </Div>
          <Div paypalButtons>
            <div ref={paypal}></div>
          </Div>
        </Div>
      </Div>
      {isOrderPaid && <Redirect to={routes.home} />}
    </>
  );
};

export default Payment;
