import { Input, VStack } from "native-base";
import { theme } from "../../../../../theme";
import Text from "components/Text";

interface InputFormProps {
  data: any;
}

const InputForm: React.FC<InputFormProps> = ({ data }) => {
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
};

export default InputForm;
