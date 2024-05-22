import { LoginFormValues } from "@pages/Login/types";
import { FormikProps } from "formik";

export interface LoginFormProps {
  formik: FormikProps<LoginFormValues>;
  isLoading: boolean;
}

export interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: "text" | "password";
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  keyboardType?: string;
}
