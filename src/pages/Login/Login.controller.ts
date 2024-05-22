import { AppNavigatorStack } from "@navigation/AppNavigator/types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Linking } from "react-native";
import { AuthenticationService } from "services/auth";
import { LoginFormValues } from "./types";
import { useFormik } from "formik";
import { LoginSchema } from "./schema";

export const useLoginController = () => {
  const navigation = useNavigation<StackNavigationProp<AppNavigatorStack>>();

  const { mutateAsync: login, isPending } = useMutation({
    mutationFn: ({ email, password }: LoginFormValues) =>
      AuthenticationService.login({
        email,
        password,
      }),
    mutationKey: ["login"],
    onSuccess: () => navigation.navigate("Tabs"),
  });

  const loginInitialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const loginForm = useFormik<LoginFormValues>({
    initialValues: loginInitialValues,
    validationSchema: LoginSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values: LoginFormValues) => {
      login(values);
    },
  });

  const handleOpenWhatsapp = () => {
    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${"5493512515069"}&text=${encodeURIComponent(
        "¡Hola! Me gustaria gestionar mi cuenta."
      )}`
    );
  };

  return {
    navigation,
    handleOpenWhatsapp,
    login,
    isPending,
    loginForm,
  };
};
