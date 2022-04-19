import React from "react";
import { Formik, ErrorMessage } from "formik";
import emailjs from "emailjs-com";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import { contactFormSchema } from "../../../../utils/validationSchema";
import Form from "../../../atoms/Form";
import Paragraph from "../../../atoms/Paragraph";
import Div from "../../../atoms/Div";
import CustomMessageError from "../../../atoms/CustomMessageError";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const ContactForm = () => {
  const CustomCheckbox = withStyles({
    root: {
      color: "#2a4157",
      "&$checked": {
        color: "#2a4157",
      },
    },
    checked: {},
  })(Checkbox);

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
            `${process.env.REACT_APP_MESSAGE_TEMPLATE}`,
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
            form="true"
          />
          <ErrorMessage name="nameAndSurname" component={CustomMessageError} />
          <Input
            inputType="material"
            label="Email"
            name="email"
            value={values.email}
            onChangeFn={handleChange}
            form="true"
          />
          <ErrorMessage name="email" component={CustomMessageError} />
          <Input
            inputType="material"
            label="Subject"
            name="subject"
            value={values.subject}
            onChangeFn={handleChange}
            form="true"
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
            form="true"
          />
          <ErrorMessage name="message" component={CustomMessageError} />
          <Div terms>
            <CustomCheckbox
              name="acceptTerms"
              checked={values.acceptTerms}
              onChange={handleChange}
            />
            <Paragraph size="s"> Accept privacy policy and terms</Paragraph>
          </Div>
          <ErrorMessage name="acceptTerms" component={CustomMessageError} />
          <Button button contained responsive type="submit">
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
