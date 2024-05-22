import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { FormControl, Input } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../../../../theme";
import { InputFieldProps, LoginFormProps } from "./types";
import ActionButton from "components/ActionButton";

export default function LoginForm({ formik, isLoading }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const renderInputField = ({
    name,
    placeholder,
    type = "text",
    leftElement,
    rightElement,
    keyboardType = "default",
  }: InputFieldProps): JSX.Element => (
    <Input
      id={name}
      backgroundColor={theme.colors.gray00}
      borderWidth={1}
      fontSize={14}
      height={"48px"}
      InputLeftElement={leftElement}
      InputRightElement={rightElement}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.blue900}
      borderColor={"#909296"}
      type={type}
      borderRadius={"8px"}
      fontFamily={"Poppins"}
      onChangeText={formik.handleChange(name)}
      autoCapitalize="none"
      keyboardType={keyboardType}
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
    <FormControl style={styles.form}>
      {renderInputField({
        name: "email",
        placeholder: "Usuario",
        leftElement: renderIcon("user-alt"),
        keyboardType: "email-address",
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
        disabled={!formik.isValid}
      />
    </FormControl>
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
    color: "#373A40",
    textAlign: "right",
    fontFamily: "Poppins",
  },
});
