import React, { useContext } from "react";
import { routes } from "../../routes";
import LoginForm from "../../components/organisms/Forms/LoginForm";
import Heading from "../../components/atoms/Heading";
import Div from "../../components/atoms/Div";
import RouterNavLink from "../../components/atoms/RouterNavLink";
import RootContext from "../../context/RootContext";
import { Redirect } from "react-router-dom";
import {
  StyledParagraphCustomer,
  StyledParagraphPassword,
} from "./StyledLoginPage";

const LoginPage = () => {
  const { currentUser } = useContext(RootContext);

  return (
    <>
      <Div form="true">
        <Heading headingType="h1">Welcome back!</Heading>
        <StyledParagraphCustomer size="s">
          New customer?
          <RouterNavLink link="true" to={routes.register}>
            SIGN UP
          </RouterNavLink>
        </StyledParagraphCustomer>
        <LoginForm />
        <StyledParagraphPassword size="s" weight="bold">
          Forgotten your password?
        </StyledParagraphPassword>
      </Div>
      {currentUser ? <Redirect to={routes.home} /> : ""}
    </>
  );
};

export default LoginPage;
