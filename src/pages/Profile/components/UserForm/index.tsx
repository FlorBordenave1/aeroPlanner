import { FormControl, Input, Text, VStack } from "native-base";
import { UserFormProps, InputFieldProps } from "./types";
import { theme } from "../../../../../theme";
import ActionButton from "components/ActionButton";
import InputForm from "../InputForm";

const inputList = [
  {
    name: "first_name",
    label: "Nombre",
    value: "German",
  },
  {
    name: "last_name",
    label: "Apellido",
    value: "Illanes",
  },
  {
    name: "document_number",
    label: "Documento",
    value: "40937624",
  },
  {
    name: "email",
    label: "Email",
    value: "german.dev@gmail.com",
  },
  {
    name: "phone_number",
    label: "Teléfono",
    value: "3512515069",
  },
];

const UserForm: React.FC<UserFormProps> = ({ formik }) => {
  return (
    <FormControl mt={4}>
      <VStack space={2}>
        {inputList.map((input, i) => (
          <InputForm data={input} key={i} />
        ))}
      </VStack>

      {/* <ActionButton
        // onPress={formik.handleSubmit}
        onPress={() => console.log("asd")}
        label="Iniciar Sesión"
        isLoading={false}
        disabled={true}
        // disabled={!formik.isValid}
      /> */}
    </FormControl>
  );
};

export default UserForm;
