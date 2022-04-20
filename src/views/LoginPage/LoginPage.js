import React, { useContext } from "react";
import { routes } from "../../routes";
import LoginForm from "../../components/organisms/Forms/LoginForm";
import Div from "../../components/atoms/Div";
import RouterNavLink from "../../components/atoms/RouterNavLink";
import RootContext from "../../context/RootContext";
import { Redirect } from "react-router-dom";
import {
  StyledHeading,
  StyledParagraphCustomer,
  StyledParagraphPassword,
} from "./StyledLoginPage";

const LoginPage = () => {
  const { currentUser } = useContext(RootContext);

  return (
    <>
      <Div form="true">
        <StyledHeading>Welcome back!</StyledHeading>
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
