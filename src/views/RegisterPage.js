import React from "react";
import { useContext } from "react";
import Div from "../components/atoms/Div";
import Heading from "../components/atoms/Heading";
import RegisterForm from "../components/molecules/RegisterForm";
import RootContext from "../context/RootContext";
import { Redirect } from "react-router-dom";
import { routes } from "../routes";

const RegisterPage = () => {
  const { currentUser } = useContext(RootContext);
  return (
    <>
      <Div registerFormWrapper>
        <Heading registerHeading headingType="h2">
          I’m new here
        </Heading>
        <RegisterForm />
      </Div>
      {currentUser ? <Redirect to={routes.home} /> : ""}
    </>
  );
};

export default RegisterPage;
