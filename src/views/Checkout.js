import React, { useContext, useRef, useEffect, useState } from "react";
import { Form, Formik, ErrorMessage } from "formik";
import Div from "../components/atoms/Div";
import Heading from "../components/atoms/Heading";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import CustomMessageError from "../components/atoms/CustomMessageError";
import { countries } from "../helpers/countries";
import RootContext from "../context/RootContext";
import {
  createOrderInFireStore,
  ordersCollection,
} from "../firebase/firestoreUtils";
import { checkoutFormSchema } from "../utils/validationSchema";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: 20,
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Checkout = () => {
  const {
    handleDeliveryMethod,
    deliveryMethod,
    orderValue,
    userData,
    isOrderPaid,
    handleOrderPaid,
    currentUser,
    cart,
    resetCart,
  } = useContext(RootContext);
  const paypal = useRef();
  const classes = useStyles();
  const [payBtn, setPayBtn] = useState(false);

  const showPayBtn = () => {
    setPayBtn(true);
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
          console.log(order);

          order.status === "COMPLETED" && handleOrderPaid(true);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <>
      <Div checkoutWrapper>
        <Div contentWrapper>
          <Heading headingType="h2">Shipping and Payment</Heading>
          <Div shippingInfo>
            <Heading headingType="h3">Shipping information</Heading>
            <Formik
              initialValues={{
                firstName: userData?.firstName || "",
                lastName: userData?.lastName || "",
                email: userData?.email || "",
                phoneNumber: "",
                address: "",
                city: "",
                postalCode: "",
                country: "",
                deliveryMethod: "",
              }}
              validationSchema={checkoutFormSchema}
              onSubmit={(values, { resetForm }) => {
                // isOrderPaid && resetCart();
                showPayBtn();
                isOrderPaid && resetForm();
              }}
            >
              {({ values, handleChange, isValid, dirty }) => (
                <Form>
                  <Input
                    inputType="material"
                    label="First name"
                    name="firstName"
                    value={values.firstName}
                    onChangeFn={handleChange}
                    registerInput
                  />
                  <ErrorMessage
                    name="firstName"
                    component={CustomMessageError}
                  />
                  <Input
                    inputType="material"
                    label="Last name"
                    name="lastName"
                    value={values.lastName}
                    onChangeFn={handleChange}
                    registerInput
                  />
                  <ErrorMessage
                    name="lastName"
                    component={CustomMessageError}
                  />
                  <Input
                    inputType="material"
                    label="E-mail"
                    name="email"
                    value={values.email}
                    onChangeFn={handleChange}
                    registerInput
                  />
                  <ErrorMessage name="email" component={CustomMessageError} />
                  <Input
                    inputType="material"
                    label="Phone number"
                    type="number"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChangeFn={handleChange}
                    registerInput
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component={CustomMessageError}
                  />
                  <Input
                    inputType="material"
                    label="Address"
                    name="address"
                    value={values.address}
                    onChangeFn={handleChange}
                    registerInput
                  />
                  <ErrorMessage name="address" component={CustomMessageError} />
                  <Input
                    inputType="material"
                    label="City"
                    name="city"
                    value={values.city}
                    onChangeFn={handleChange}
                    registerInput
                  />
                  <ErrorMessage name="city" component={CustomMessageError} />
                  <Input
                    inputType="material"
                    label="Postal code"
                    name="postalCode"
                    value={values.postalCode}
                    onChangeFn={handleChange}
                    registerInput
                  />
                  <ErrorMessage
                    name="postalCode"
                    component={CustomMessageError}
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                    >
                      {countries.map((c) => {
                        return <MenuItem value={c.label}>{c.label}</MenuItem>;
                      })}
                      {/* <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  </FormControl>
                  <ErrorMessage name="country" component={CustomMessageError} />
                  <Div deliveryMethod>
                    <Heading headingType="h3">Delivery Method</Heading>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="deliveryMethod"
                        name="deliveryMethod"
                        value={values.deliveryMethod}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="5"
                          control={<Radio color="primary" />}
                          label="InPost 5$"
                        />
                        <FormControlLabel
                          value="8"
                          control={<Radio color="primary" />}
                          label="DHL 8$"
                        />
                        <FormControlLabel
                          value="6"
                          control={<Radio color="primary" />}
                          label="FedEx 6$"
                        />
                        <FormControlLabel
                          value="9"
                          control={<Radio color="primary" />}
                          label="DPD 9$"
                        />
                      </RadioGroup>
                    </FormControl>
                    <ErrorMessage
                      name="deliveryMethod"
                      component={CustomMessageError}
                    />
                  </Div>
                  <Button
                    btnType="material"
                    color="primary"
                    variant="contained"
                    className="responsiveBtn checkoutBtn"
                    type="submit"
                    disabled={!(isValid && dirty)}
                  >
                    pay
                  </Button>
                </Form>
              )}
            </Formik>
          </Div>
        </Div>
        <Div totalCost>
          <Heading headingType="h3">Total cost: {orderValue}$</Heading>
        </Div>
        {payBtn && (
          <Div paypalButtons>
            <div ref={paypal}></div>
          </Div>
        )}
      </Div>
    </>
  );
};

export default Checkout;
