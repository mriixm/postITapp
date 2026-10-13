import * as yup from "yup";

export const userSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(12, "Password must not exceed 12 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match")
    .required("Confirm Password is required"),
});