import React from "react";
import { Badge, Box, HStack, Text as Texta, VStack } from "native-base";
import { theme } from "../../../../../theme";
import { StyleSheet } from "react-native";
import { FlightInfoBoxProps } from "./types";
import { TouchableOpacity } from "react-native-gesture-handler";
import Text from "components/Text";

const FlightInfoBox: React.FC<FlightInfoBoxProps> = ({
  flightInfo,
  onClick,
}) => {
  const { date, time, remainingDays, withInstructor, planeModel } = flightInfo;

  const renderInstructor = () => (
    <HStack>
      <Text font="HELPER_TEXT_REGULAR" color={theme.colors.gray03}>
        Instructor:{" "}
      </Text>
      <Text font={"BT_SMALL_SEMIBOLD"} color={"#525d6c"}>
        {withInstructor ? "Mariano Lopez" : "Desconocido"}
      </Text>
    </HStack>
  );

  const renderSoloBadge = () => (
    <Badge colorScheme="success" borderRadius={12} width={20}>
      Vuela solo
    </Badge>
  );

  return (
    <TouchableOpacity onPress={onClick}>
      <Box bg={theme.colors.baseWhite} borderRadius={12} shadow={2} p={4}>
        <VStack space={1}>
          <HStack>
            <Texta {...styles.base}>Avión: </Texta>
            <Texta {...styles.bold}>{planeModel}</Texta>
          </HStack>
          <Texta {...styles.description}>
            {date} {time} - {remainingDays} días restantes
          </Texta>
          {withInstructor ? renderInstructor() : renderSoloBadge()}
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: theme.colors.gray03,
  },
  bold: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  description: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: theme.colors.gray03,
  },
});

export default FlightInfoBox;
