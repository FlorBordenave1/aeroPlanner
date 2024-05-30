import React from "react";
import { Badge, Box, HStack, VStack } from "native-base";
import { theme } from "../../../../../theme";
import { FlightInfoBoxProps } from "./types";
import { TouchableOpacity } from "react-native-gesture-handler";
import Text from "components/Text";

const FlightInfoBox: React.FC<FlightInfoBoxProps> = ({
  flightInfo,
  onClick,
}) => {
  const { date, time, remainingDays, withInstructor, planeModel } = flightInfo;

  return (
    <TouchableOpacity onPress={onClick}>
      <Box bg={theme.colors.baseWhite} borderRadius={12} shadow={2} p={4}>
        <VStack space={1}>
          <HStack>
            <Text font="BODY_REGULAR">Avión: </Text>
            <Text font="BODY_SEMIBOLD">{planeModel}</Text>
          </HStack>
          <Text font="HELPER_TEXT_REGULAR">
            {date} {time} - {remainingDays} días restantes
          </Text>
          {withInstructor ? (
            <HStack>
              <Text font="HELPER_TEXT_REGULAR">Instructor: </Text>
              <Text font={"BT_SMALL_SEMIBOLD"} color={"#525d6c"}>
                {withInstructor ? "Mariano Lopez" : "Desconocido"}
              </Text>
            </HStack>
          ) : (
            <Badge colorScheme="success" borderRadius={12} width={20}>
              Vuela solo
            </Badge>
          )}
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default FlightInfoBox;
