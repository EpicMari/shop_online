import React from "react";
import ContactForm from "../components/molecules/ContactForm";
import Div from "../components/atoms/Div";
import Heading from "../components/atoms/Heading";

const Contact = () => {
  return (
    <Div contactWrapper>
      <Heading headingType="h1">Contact</Heading>
      <ContactForm />
    </Div>
  );
};

export default Contact;
