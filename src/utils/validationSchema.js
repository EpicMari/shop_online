import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
  nameAndSurname: Yup.string()
    .required("Enter name and surname")
    .min(6, "Name and surname too short"),
  email: Yup.string().required("Enter your email").email("Invalid Email"),
  subject: Yup.string().required("Enter subject"),
  message: Yup.string().required("Enter message").min(15, "Message too short"),
  acceptTerms: Yup.bool().oneOf([true], "You must accept terms"),
});

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().required("Enter your email").email("Invalid Email"),
  password: Yup.string().required("Enter your password"),
});

export const registerFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Enter first name")
    .min(3, "First name too short"),
  lastName: Yup.string()
    .required("Enter last name")
    .min(3, "Second name too short"),
  email: Yup.string().required("Enter your email").email("Invalid Email"),
  password: Yup.string()
    .required("Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: Yup.string()
    .required("Password must match")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  gender: Yup.string().required("Choose your gender"),
  acceptTerms: Yup.bool().oneOf([true], "You must accept terms"),
});

export const checkoutFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Enter your name")
    .min(3, "First name too short"),
  lastName: Yup.string()
    .required("Enter your last name")
    .min(1, "Second name too short"),
  email: Yup.string().required("Enter your email").email("Invalid Email"),
  phoneNumber: Yup.number().required("Enter your phone number"),
  address: Yup.string().required("Enter your address").min(2),
  city: Yup.string().required("Enter your city").min(2),
  postalCode: Yup.string()
    .required("Enter your postal code")
    .matches(/^([0-9]{2})(-[0-9]{3})/, "Only number, example: 11-111"),
  country: Yup.string().required("Choose your country"),
  deliveryMethod: Yup.mixed().required("A delivery method is required"),
});
