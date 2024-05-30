import { FormikProps } from "formik";
import { KeyboardTypeOptions } from "react-native";

export interface UserFormProps {
  //   formik: FormikProps<LoginFormValues>;
  //   isLoading: boolean;
  formik: any;
}

export interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: "text" | "password";
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  keyboardType?: KeyboardTypeOptions;
}
