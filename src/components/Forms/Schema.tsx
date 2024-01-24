import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Minimum eight characters, at least one letter, one number and one special character"
    ),
});

export const CreateProductSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required"),
    brand: yup
    .string()
    .required("Brand is required"),
    price: yup
    .string()
    .required("Price is required"),
    description: yup
    .string()
    .required("Description is required")
   
});


export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
});

export const ResetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Minimum eight characters, at least one letter, one number and one special character"
    ),

  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

export const CreateMemberSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .matches(/^[A-Za-z]+$/, "Name include only alphabetic characters")
    .min(4, "Must be more than 4 characters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .matches(/^[A-Za-z]+$/, "Name include only alphabetic characters")
    .min(4, "Must be more than 4 characters"),
  userName: yup.string().required("User Name is required"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
});
