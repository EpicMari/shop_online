import React from "react";
import ContactForm from "../../components/organisms/Forms/ContactForm";
import Div from "../../components/atoms/Div";
import { StyledHeading } from "./StyledContact";

const Contact = () => {
  return (
    <Div form="true">
      <StyledHeading>Contact</StyledHeading>
      <ContactForm />
    </Div>
  );
};

export default Contact;
