import * as Yup from "yup";


export const SignSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    address: Yup.string().required("Address is required"),
    password: Yup.string()
      .required("Password is mendatory")
      .min(8, "Password must be at 8 char long"),
    confirm_password: Yup.string()
      .required("confirm_Password is aslo  mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^\+(?:[0-9] ?){6,14}[0-9]$/,
        "Please enter a valid phone number with country code"
      ),
  });