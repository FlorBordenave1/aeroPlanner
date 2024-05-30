import { Badge, HStack, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../theme";
import { useFlightDetailController } from "./FlightDetail.controller";
import CustomSafeAreaView from "components/CustomSafeArea";
import Stepper from "./components/Stepper";
import Text from "components/Text";

const FlightDetail: React.FC = () => {
  const { handleGoBack } = useFlightDetailController();

  const withInstructor = true;

  const renderSoloBadge = () => (
    <Badge colorScheme="success" borderRadius={12} width={20}>
      Vuela solo
    </Badge>
  );

  const renderItem = (title: string, label: string) => (
    <HStack>
      <Text font="BODY_SEMIBOLD">{title}: </Text>
      <Text font="BODY_REGULAR" w="70%">
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
            <Text font="BODY_SEMIBOLD">Piloto: </Text>
            <Text font="H3_SEMIBOLD" color={theme.colors.primary05}>
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

export default FlightDetail;
