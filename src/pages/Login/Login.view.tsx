import { StyleSheet } from "react-native";
import { Box, Image, VStack } from "native-base";
import { theme } from "../../../theme";
import { useLoginController } from "./Login.controller";
import LoginForm from "./components/LoginForm";
import CreateAccountLabel from "./components/CreateAccountLabel";

export default function Login() {
  const { handleOpenWhatsapp, isPending, loginForm } = useLoginController();

  return (
    <VStack bg={theme.colors.blue800} flex={1} justifyContent={"center"}>
      <Box style={styles.imageContainer}>
        <Image
          source={require("./../../../assets/logo-saetta.png")}
          alt="Alternate Text"
          size="xl"
        />
      </Box>
      <Box style={styles.formContainer}>
        <LoginForm isLoading={isPending} formik={loginForm} />
      </Box>
      <CreateAccountLabel handleOpenWhatsapp={handleOpenWhatsapp} />
    </VStack>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 32,
  },
});
