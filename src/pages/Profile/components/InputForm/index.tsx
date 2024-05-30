import { FormControl, Input, VStack } from "native-base";
import { theme } from "../../../../../theme";
import { StyleSheet } from "react-native";
import ActionButton from "components/ActionButton";
import { InputFieldProps, UserFormProps } from "../UserForm/types";
import Text from "components/Text";

interface InputFormProps {
  data: any;
}
export default function InputForm({ data }: InputFormProps) {
  return (
    <VStack>
      <Text font="CAPTION_MEDIUM">{data.label}</Text>
      <Input
        readOnly
        id={data.name}
        backgroundColor={"#e3e3e3"}
        borderWidth={1}
        fontSize={14}
        height={"48px"}
        placeholder={data.label}
        placeholderTextColor={theme.colors.gray01}
        borderColor={theme.colors.baseWhite}
        value={data.value}
        //   type={type}
        borderRadius={"8px"}
        fontFamily={"Poppins"}
        //   onChangeText={formik.handleChange(name)}
        autoCapitalize="none"
        //   keyboardType={keyboardType}
        marginTop={0}
      />
    </VStack>
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
});
