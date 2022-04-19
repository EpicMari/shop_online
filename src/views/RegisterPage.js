import React from "react";
import { useContext } from "react";
import Div from "../components/atoms/Div";
import Heading from "../components/atoms/Heading";
import RootContext from "../context/RootContext";
import { Redirect } from "react-router-dom";
import { routes } from "../routes";
import RegisterForm from "../components/organisms/Forms/RegisterForm";

const RegisterPage = () => {
  const { currentUser } = useContext(RootContext);
  return (
    <>
      <Div form="true">
        <Heading headingType="h1">I’m new here</Heading>
        <RegisterForm />
      </Div>
      {currentUser ? <Redirect to={routes.home} /> : ""}
    </>
  );
};

export default RegisterPage;
