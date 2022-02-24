import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../../../firebase/firebaseConfig";
import { routes } from "../../../routes";
import { loginFormSchema } from "../../../utils/validationSchema";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import CustomMessageError from "../../atoms/CustomMessageError";

const LoginForm = () => {
  const [isRedirect, setIsRedirect] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginFormSchema}
        onSubmit={(values, { resetForm }) => {
          auth
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => setIsRedirect(true))
            .catch((err) => console.log(err));
          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Input
              inputType="material"
              label="E-mail"
              name="email"
              value={values.email}
              onChangeFn={handleChange}
              loginInput
            />
            <ErrorMessage name="email" component={CustomMessageError} />
            <Input
              inputType="material"
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChangeFn={handleChange}
              loginInput
            />
            <ErrorMessage name="password" component={CustomMessageError} />
            <Button
              btnType="material"
              color="primary"
              variant="contained"
              type="submit"
              loginBtn
            >
              LOG IN
            </Button>
          </Form>
        )}
      </Formik>
      {isRedirect && <Redirect to={routes.products} />}
    </>
  );
};

export default LoginForm;
