import { AppNavigatorStack } from "@navigation/AppNavigator/types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMutation } from "@tanstack/react-query";
import { Linking } from "react-native";
import { AuthenticationService } from "services/auth";
import { LoginFormValues, LoginResponse, User } from "./types";
import { useFormik } from "formik";
import { LoginSchema } from "./schema";
import { showToast } from "utils/showToast";
import { useAuthStore } from "zustand/useAuthStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLoginController = () => {
  const navigation = useNavigation<StackNavigationProp<AppNavigatorStack>>();

  const setUser = useAuthStore((state) => state.setUser);

  const { mutateAsync: login, isPending } = useMutation({
    mutationFn: ({ email, password }: LoginFormValues) =>
      AuthenticationService.login({
        email,
        password,
      }),
    mutationKey: ["login"],
    onSuccess: (data) => {
      saveToken(data);
      console.log("data", data);
    },
    onError: (error) => {
      showToast({ message: String(error), type: "error" });
    },
  });

  const saveToken = async (data: LoginResponse) => {
    try {
      await AsyncStorage.setItem("authToken", data.token);
      useAuthStore.getState().setToken(data.token);
      setUser(data);
    } catch (error) {
      console.error("Error saving token: ", error);
    } finally {
      handleRedirect(data.user);
    }
  };

  const handleRedirect = (data: User) => {
    const role = data.role.name;
    // if (role === "admin" || role === "pilot") {

    if (role === "pilot") {
      navigation.navigate("Tabs");
      return;
    }
    // if (role === "instructor"  ) {
    if (role === "instructor" || role === "admin") {
      navigation.navigate("EvaluationForm");
    }
  };

  const loginInitialValues: LoginFormValues = {
    // email: "instructor@dev.com",
    // password: "Qwe123456",

    // email: "gillanes.dev@gmail.com",
    // password: "Qwe123456",

    email: "piloto@dev.com",
    password: "Qwe123456",
  };

  // const loginInitialValues: LoginFormValues = {
  //   email: "",
  //   password: "",
  // };

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
