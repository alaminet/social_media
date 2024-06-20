import * as Yup from "yup";

export const signUpValid = Yup.object({
  fname: Yup.string().min(3).max(7).required("Please enter your First Name"),
  lname: Yup.string().min(3).max(7).required("Please enter your Last Name"),
  email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string().min(5).required("Please enter your Password"),
  birthDate: Yup.string().required("Please enter your Birthday"),
});

export const signInValid = Yup.object({
  email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string().min(5).required("Please enter your Password"),
});
