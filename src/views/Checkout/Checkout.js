import React, { useContext, useState } from "react";
import { Form, Formik, ErrorMessage } from "formik";
import Heading from "../../components/atoms/Heading";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import CustomMessageError from "../../components/atoms/CustomMessageError";
import { countries } from "../../helpers/countries";
import RootContext from "../../context/RootContext";
import { checkoutFormSchema } from "../../utils/validationSchema";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { routes } from "../../routes";
import CartOrder from "../../components/molecules/CartOrder";
import {
  StyledContentBox,
  StyledCostBox,
  StyledDeliveryBox,
  StyledInfoBox,
  StyledWrapper,
} from "./StyledCheckout";

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
  const { orderValue, userData, isOrderPaid, cart } = useContext(RootContext);

  const [formValid, setFormValid] = useState(false);

  const classes = useStyles();

  return (
    <>
      <StyledWrapper>
        <StyledContentBox>
          <Heading headingType="h2">Shipping and Payment</Heading>
          <StyledInfoBox>
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
                setFormValid(true);
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
                    form="true"
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
                    form="true"
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
                    form="true"
                  />
                  <ErrorMessage name="email" component={CustomMessageError} />
                  <Input
                    inputType="material"
                    label="Phone number"
                    type="number"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChangeFn={handleChange}
                    form="true"
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
                    form="true"
                  />
                  <ErrorMessage name="address" component={CustomMessageError} />
                  <Input
                    inputType="material"
                    label="City"
                    name="city"
                    value={values.city}
                    onChangeFn={handleChange}
                    form="true"
                  />
                  <ErrorMessage name="city" component={CustomMessageError} />
                  <Input
                    inputType="material"
                    label="Postal code"
                    name="postalCode"
                    value={values.postalCode}
                    onChangeFn={handleChange}
                    form="true"
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
                    </Select>
                  </FormControl>
                  <ErrorMessage name="country" component={CustomMessageError} />
                  <StyledDeliveryBox>
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
                  </StyledDeliveryBox>
                  <Button
                    button
                    contained
                    responsive
                    type="submit"
                    disabled={!(isValid && dirty)}
                  >
                    pay
                  </Button>
                  {formValid && (
                    <Redirect
                      to={{ pathname: routes.payment, state: { ...values } }}
                    />
                  )}
                </Form>
              )}
            </Formik>
          </StyledInfoBox>
        </StyledContentBox>
        <CartOrder cartItems={cart} />
        <StyledCostBox>
          <Heading headingType="h3">Total cost: {orderValue}$</Heading>
        </StyledCostBox>
      </StyledWrapper>
    </>
  );
};

export default Checkout;
