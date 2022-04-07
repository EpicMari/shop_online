import React, { useContext } from "react";
import { auth } from "../../../firebase/firebaseConfig";
import { Formik, ErrorMessage } from "formik";
import { registerFormSchema } from "../../../utils/validationSchema";
import Form from "../../atoms/Form";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Select from "@material-ui/core/Select";
import Paragraph from "../../atoms/Paragraph";
import Div from "../../atoms/Div";
import { createUserInCollection } from "../../../firebase/firestoreUtils";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CustomMessageError from "../../atoms/CustomMessageError";
import Checkbox from "@material-ui/core/Checkbox";

const RegisterForm = () => {
  const useStyles = makeStyles(() => ({
    selectStyles: {
      width: "100%",
      marginTop: 20,
    },
  }));
  const classes = useStyles();

  const CustomCheckbox = withStyles({
    root: {
      color: "#2a4157",
      "&$checked": {
        color: "#2a4157",
      },
    },
    checked: {},
  })(Checkbox);

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
            <Div termsWrapper>
              <CustomCheckbox
                name="acceptTerms"
                checked={values.acceptTerms}
                onChange={handleChange}
              />
              <Paragraph registerTerms>
                Accept privacy policy and terms
              </Paragraph>
            </Div>
            <ErrorMessage name="acceptTerms" component={CustomMessageError} />
            <Button button contained responsive type="submit">
              SIGN UP
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
