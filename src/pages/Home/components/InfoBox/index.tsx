import { Box, HStack, Text, VStack } from "native-base";
import { InfoBoxProps } from "./types";
import { theme } from "../../../../../theme";

export default function InfoBox({
  title,
  direccion,
  cardTitle,
  cardDescription,
  icon,
  bg,
}: InfoBoxProps) {
  return (
    <VStack space={"8px"}>
      {title && (
        <Text fontSize={20} fontFamily={"Poppins-Bold"}>
          {title}
        </Text>
      )}
      <Box
        background={bg || theme.colors.baseWhite}
        borderRadius={12}
        shadow={"2"}
        padding={"16px"}
        flexDirection={"row"}
        alignItems={"center"}
        style={{ gap: 12 }}
      >
        {icon}
        {direccion === "row" ? (
          <HStack alignItems={"center"} space={2}>
            <Text fontSize={16} fontFamily={"Poppins"}>
              {cardTitle}
            </Text>
            <Text
              fontSize={14}
              fontFamily={"Poppins"}
              color={theme.colors.primary03}
            >
              {cardDescription}
            </Text>
          </HStack>
        ) : (
          <VStack>
            <Text fontSize={16} fontFamily={"Poppins"} lineHeight={"24px"}>
              {cardTitle}
            </Text>
            <Text
              fontSize={14}
              fontFamily={"Poppins"}
              color={theme.colors.primary03}
              lineHeight={"16px"}
            >
              {cardDescription}
            </Text>
          </VStack>
        )}
      </Box>
    </VStack>
  );
}
