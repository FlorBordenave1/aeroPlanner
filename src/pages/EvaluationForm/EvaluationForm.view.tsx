import CustomSafeAreaView from "components/CustomSafeArea";
import TitlePage from "components/TitlePage";
import { Input, ScrollView, Text, VStack } from "native-base";
import { theme } from "../../../theme";
import Autocomplete from "./components/Autocomplete";
import { useEffect, useState } from "react";
// import { getPilots } from "services/pilots/getPilots";
import { Pilot } from "./EvaluationForm.types";

const EvaluationForm: React.FC = () => {
  // const [pilots, setPilots] = useState<Pilot[]>([]);
  const [error, setError] = useState<string | null>(null);

  // console.log("pilots", pilots);

  // useEffect(() => {
  //   const fetchPilots = async () => {
  //     try {
  //       const data = await getPilots();
  //       setPilots(data.pilots);
  //     } catch (e: any) {
  //       setError(e.message);
  //     }
  //   };

  //   fetchPilots();
  // }, []);

  return (
    <CustomSafeAreaView>
      <ScrollView>
        <VStack bg={theme.colors.baseWhite} flex={1} space={4}>
          <TitlePage title="Chequeo" subtitle="Vuelo solo" />

          <Text> Piloto </Text>
          {/* <Autocomplete data={pilots} /> */}
          <Text fontWeight={800}> Aeronave </Text>
          <Text> RADIOBUTTON </Text>

          <Text fontWeight={800}> Instructor </Text>
          <Text> no se modifica </Text>

          <Text fontWeight={800}> comentarios generales </Text>
          <Text> textarea </Text>

          <Text fontWeight={800}> vuela solo </Text>
          <Text> radio button </Text>

          <Input
            id={"name"}
            backgroundColor={theme.colors.gray00}
            borderWidth={1}
            fontSize={14}
            height={"48px"}
            placeholder={"placeholder"}
            placeholderTextColor={theme.colors.gray09}
            borderColor={theme.colors.gray02}
            // type={type}
            borderRadius={"8px"}
            fontFamily={"Poppins"}
            // onChangeText={formik.handleChange(name)}
            autoCapitalize="none"
            // keyboardType={keyboardType}
          />
        </VStack>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default EvaluationForm;
