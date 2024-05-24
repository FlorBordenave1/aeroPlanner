import { AppNavigatorStack } from "@navigation/AppNavigator/types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMutation } from "@tanstack/react-query";
import { Linking } from "react-native";
import { AuthenticationService } from "services/auth";
import { LoginFormValues } from "./types";
import { useFormik } from "formik";
import { LoginSchema } from "./schema";
import { showToast } from "utils/showToast";

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
    onError: (error) => {
      showToast({ message: String(error), type: "error" });
    },
  });

  const loginInitialValues: LoginFormValues = {
    email: "gillanes.dev@gmail.com",
    password: "Qwe123456",
  };

  const loginForm = useFormik<LoginFormValues>({
    initialValues: loginInitialValues,
    validationSchema: LoginSchema,
    validateOnMount: true,
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
