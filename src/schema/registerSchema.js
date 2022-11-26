import * as Yup from "yup";

const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  emailAddress: Yup.string().email().required("Email address is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  password: Yup.string().required("Password is required"),
  password2: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords do not match"),
});

export default registerValidationSchema;
