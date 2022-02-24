import React, { useContext } from "react";
import { auth } from "../../../firebase/firebaseConfig";
import { Formik, Form, ErrorMessage } from "formik";
import { registerFormSchema } from "../../../utils/validationSchema";
import Input from "../../atoms/Input";
import Checkbox from "../../atoms/Checkbox";
import Button from "../../atoms/Button";
import RootContext from "../../../context/RootContext";
import Select from "@material-ui/core/Select";
import Paragraph from "../../atoms/Paragraph";
import Div from "../../atoms/Div";
import { createUserInCollection } from "../../../firebase/firestoreUtils";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import CustomMessageError from "../../atoms/CustomMessageError";

const RegisterForm = () => {
  const { genderChoice, handleGenderChoiceValue } = useContext(RootContext);
  const useStyles = makeStyles(() => ({
    selectStyles: {
      width: "100%",
      marginTop: 20,
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          acceptTerms: false,
        }}
        validationSchema={registerFormSchema}
        onSubmit={(values, { resetForm }) => {
          auth
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((res) => {
              alert("Zarejestrowano");
              createUserInCollection(
                { ...values, address: {}, role: "user" },
                res.user.uid
              );
            })
            .catch((err) => alert(err));
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Input
              inputType="material"
              label="First name"
              name="firstName"
              value={values.firstName}
              onChangeFn={handleChange}
              registerInput
            />
            <ErrorMessage name="firstName" component={CustomMessageError} />
            <Input
              inputType="material"
              label="Last name"
              name="lastName"
              value={values.lastName}
              onChangeFn={handleChange}
              registerInput
            />
            <ErrorMessage name="lastName" component={CustomMessageError} />
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
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChangeFn={handleChange}
              registerInput
            />
            <ErrorMessage name="password" component={CustomMessageError} />
            <Input
              inputType="material"
              label="Password Confirm"
              name="passwordConfirmation"
              type="password"
              value={values.passwordConfirmation}
              onChangeFn={handleChange}
              registerInput
            />
            <ErrorMessage
              name="passwordConfirmation"
              component={CustomMessageError}
            />
            <FormControl className={classes.selectStyles}>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                name="gender"
                value={values.gender}
                onChange={handleChange}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
            <ErrorMessage name="gender" component={CustomMessageError} />
            <Div registerTermsWrapper>
              <Checkbox
                color="primary"
                name="acceptTerms"
                checked={values.acceptTerms}
                onChangeFn={handleChange}
                registerCheckbox
              />
              <Paragraph registerTerms>
                Accept privacy policy and terms
              </Paragraph>
            </Div>
            <ErrorMessage name="acceptTerms" component={CustomMessageError} />
            <Button
              btnType="material"
              color="primary"
              variant="contained"
              type="submit"
              registerBtn
            >
              SIGN UP
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
