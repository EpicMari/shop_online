import React from "react";
import { Formik, ErrorMessage } from "formik";
import emailjs from "emailjs-com";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Checkbox from "../../atoms/Checkbox";
import { contactFormSchema } from "../../../utils/validationSchema";
import Form from "../../atoms/Form";
import Paragraph from "../../atoms/Paragraph";
import Div from "../../atoms/Div";
import CustomMessageError from "../../atoms/CustomMessageError";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        nameAndSurname: "",
        email: "",
        subject: "",
        message: "",
        acceptTerms: false,
      }}
      validationSchema={contactFormSchema}
      onSubmit={(values, { resetForm }) => {
        emailjs
          .send(
            `${process.env.REACT_APP_SERVICE_ID}`,
            `${process.env.REACT_APP_TEMPLATE_ID}`,
            values,
            `${process.env.REACT_APP_USER_ID}`
          )
          .then(() => alert("Message send"))
          .catch(() => alert("ERROR"));
        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <Input
            inputType="material"
            label="Name and Surname"
            name="nameAndSurname"
            value={values.nameAndSurname}
            onChangeFn={handleChange}
            contactInput
          />
          <ErrorMessage name="nameAndSurname" component={CustomMessageError} />
          <Input
            inputType="material"
            label="Email"
            name="email"
            value={values.email}
            onChangeFn={handleChange}
            contactInput
          />
          <ErrorMessage name="email" component={CustomMessageError} />
          <Input
            inputType="material"
            label="Subject"
            name="subject"
            value={values.subject}
            onChangeFn={handleChange}
            contactInput
          />
          <ErrorMessage name="subject" component={CustomMessageError} />
          <Input
            inputType="material"
            label="Standard"
            multiline
            rows={4}
            name="message"
            value={values.message}
            onChangeFn={handleChange}
            contactInput
          />
          <ErrorMessage name="message" component={CustomMessageError} />
          <Div contactTermsWrapper>
            <Checkbox
              color="primary"
              name="acceptTerms"
              checked={values.acceptTerms}
              onChangeFn={handleChange}
            />
            <Paragraph> Accept privacy policy and terms</Paragraph>
          </Div>
          <ErrorMessage name="acceptTerms" component={CustomMessageError} />
          <Button
            btnType="material"
            color="primary"
            variant="contained"
            type="submit"
            contactBtn
          >
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
