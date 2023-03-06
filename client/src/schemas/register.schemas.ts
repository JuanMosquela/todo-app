import * as yup from "yup";

export const registerSchemas = yup.object().shape({
  email: yup.string().email().required("This field is requiered"),
  first_name: yup.string().min(2).max(15).required("This field is required"),
  last_name: yup.string().min(2).max(15).required("This field is required"),

  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is requiered"),
});
