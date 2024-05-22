import { useState } from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";
import { FormControl, Input, KeyboardAvoidingView } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../../../../theme";
import { InputFieldProps, LoginFormProps } from "./types";
import ActionButton from "components/ActionButton";
import { Form } from "formik";

export default function LoginForm({ formik, isLoading }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const renderInputField = ({
    name,
    placeholder,
    type = "text",
    leftElement,
    rightElement,
  }: InputFieldProps): JSX.Element => (
    <Input
      id={name}
      backgroundColor={theme.colors.gray00}
      borderWidth={0}
      fontSize={14}
      height={"48px"}
      InputLeftElement={leftElement}
      InputRightElement={rightElement}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.blue900}
      type={type}
      variant={"rounded"}
      fontFamily={"Poppins"}
      onChangeText={formik.handleChange(name)}
      autoCapitalize="none"
    />
  );

  const renderIcon = (name: string): JSX.Element => (
    <Pressable onPress={() => setShowPassword(!showPassword)}>
      <FontAwesome5
        name={name}
        size={15}
        color={theme.colors.blue900}
        paddingLeft={name === "user-alt" && 12}
        paddingRight={name !== "user-alt" && 12}
      />
    </Pressable>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <FormControl style={styles.form}>
        {renderInputField({
          name: "email",
          placeholder: "Usuario",
          type: "text",
          leftElement: renderIcon("user-alt"),
        })}

        {renderInputField({
          name: "password",
          placeholder: "Contraseña",
          type: showPassword ? "text" : "password",
          rightElement: renderIcon(showPassword ? "eye" : "eye-slash"),
        })}

        <Text style={styles.text}> Olvidaste tu contraseña?</Text>

        <ActionButton
          onPress={formik.handleSubmit}
          label="Iniciar Sesión"
          isLoading={isLoading}
        />
      </FormControl>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "center",
  },
  form: {
    borderRadius: 10,
    gap: 16,
    marginTop: 24,
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    color: theme.colors.baseWhite,
    textAlign: "right",
    fontFamily: "Poppins",
  },
});
