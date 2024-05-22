import { Platform, StyleSheet } from "react-native";
import { Box, Image, KeyboardAvoidingView, VStack } from "native-base";
import { theme } from "../../../theme";
import { useLoginController } from "./Login.controller";
import LoginForm from "./components/LoginForm";
import CreateAccountLabel from "./components/CreateAccountLabel";

export default function Login() {
  const { handleOpenWhatsapp, isPending, loginForm } = useLoginController();

  return (
    <VStack bg={theme.colors.baseWhite} flex={1} justifyContent={"center"}>
      <Image
        source={require("./../../../assets/logo-nombre.png")}
        alt="Saetta logo"
        resizeMode="contain"
        style={{
          width: "100%",
          height: 150,
          resizeMode: "contain",
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Box style={styles.formContainer}>
          <LoginForm isLoading={isPending} formik={loginForm} />
        </Box>
      </KeyboardAvoidingView>
      <CreateAccountLabel handleOpenWhatsapp={handleOpenWhatsapp} />
    </VStack>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
});
