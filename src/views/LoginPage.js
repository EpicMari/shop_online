import React, { useContext } from "react";
import { routes } from "../routes";
import LoginForm from "../components/molecules/LoginForm";
import Heading from "../components/atoms/Heading";
import Paragraph from "../components/atoms/Paragraph";
import RouterNavLink from "../components/atoms/RouterNavLink";
import Div from "../components/atoms/Div";
import RootContext from "../context/RootContext";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  const { currentUser } = useContext(RootContext);

  return (
    <>
      <Div formWrapper>
        <Heading headingType="h1">Welcome back!</Heading>
        <Paragraph newCustomer>
          New customer?{" "}
          <RouterNavLink to={routes.register}>SIGN UP</RouterNavLink>
        </Paragraph>
        <LoginForm />
        <Paragraph forgottenPassword>Forgotten your password?</Paragraph>
      </Div>
      {currentUser ? <Redirect to={routes.home} /> : ""}
    </>
  );
};

export default LoginPage;
