import * as Yup from "yup";

export default function Validation() {
  const userSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Too Short")
      .max(20, "First name only")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Too Short")
      .max(20, "Last name only")
      .required("Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    confirmEmail: Yup.string().oneOf(
      [Yup.ref("email"), null],
      "Please confirm Email"
    ),
    password: Yup.string()
      .min(6, "Enter Strong Password")
      .required("pasword is Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Please confirm password"
    ),
  });
  return userSchema;
}
