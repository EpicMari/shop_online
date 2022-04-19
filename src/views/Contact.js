import React from "react";
import ContactForm from "../components/organisms/Forms/ContactForm";
import Div from "../components/atoms/Div";
import Heading from "../components/atoms/Heading";

const Contact = () => {
  return (
    <Div form="true">
      <Heading headingType="h1">Contact</Heading>
      <ContactForm />
    </Div>
  );
};

export default Contact;
