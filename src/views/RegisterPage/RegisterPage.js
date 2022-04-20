import React from "react";
import { useContext } from "react";
import Div from "../../components/atoms/Div";
import RootContext from "../../context/RootContext";
import { Redirect } from "react-router-dom";
import { routes } from "../../routes";
import RegisterForm from "../../components/organisms/Forms/RegisterForm";
import { StyledHeading } from "../Contact/StyledContact";

const RegisterPage = () => {
  const { currentUser } = useContext(RootContext);
  return (
    <>
      <Div form="true">
        <StyledHeading>I’m new here</StyledHeading>
        <RegisterForm />
      </Div>
      {currentUser ? <Redirect to={routes.home} /> : ""}
    </>
  );
};

export default RegisterPage;
