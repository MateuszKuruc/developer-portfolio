import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Use at least 3 characters")
    .required("Please share your name"),
  email: yup
    .string()
    .email("Enter valid e-mail address")
    .required("Please share your e-mail address"),
  message: yup
    .string()
    .required("Please enter the message")
    .min(10, "The message cannot be shorter than 10 characters"),
});
