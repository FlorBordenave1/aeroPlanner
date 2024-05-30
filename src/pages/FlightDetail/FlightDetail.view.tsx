import { Badge, HStack, Text, VStack } from "native-base";
import { theme } from "../../../theme";
import { StyleSheet } from "react-native";
import { useFlightDetailController } from "./FlightDetail.controller";
import Stepper from "./components/Stepper";
import { Ionicons } from "@expo/vector-icons";
import CustomSafeAreaView from "components/CustomSafeArea";

const FlightDetail = () => {
  const { handleGoBack } = useFlightDetailController();

  const withInstructor = true;

  const renderSoloBadge = () => (
    <Badge colorScheme="success" borderRadius={12} width={20}>
      Vuela solo
    </Badge>
  );

  const renderItem = (title: string, label: string) => (
    <HStack>
      <Text {...styles.base}>{title}: </Text>
      <Text {...styles.bold} w="70%">
        {label}
      </Text>
    </HStack>
  );

  return (
    <CustomSafeAreaView>
      <VStack marginTop={2} flex={1}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color={theme.colors.gray05}
          onPress={handleGoBack}
        />

        <VStack space={1} mt={2}>
          <HStack alignItems={"center"}>
            <Text {...styles.base}>Piloto: </Text>
            <Text {...styles.base} color={theme.colors.primary05} fontSize={18}>
              German Illanes
            </Text>
          </HStack>

          {withInstructor
            ? renderItem("Instructor", "Mariano Lopez")
            : renderSoloBadge()}
          {renderItem("Aeronave", "LV-S105")}
          {renderItem("Fecha", "12/06/2024 14:45")}
          {renderItem("Duracion aproximada", "2hs")}
          {renderItem("Recorrido", "")}

          <Stepper />
        </VStack>
      </VStack>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: theme.colors.gray05,
  },
  bold: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: theme.colors.gray03,
  },
});

export default FlightDetail;
