import { Box, HStack, Text, VStack } from "native-base";
import { LicenceBoxProps } from "./types";
import { theme } from "../../../../../theme";
import { Entypo } from "@expo/vector-icons";

export default function LicenceBox({ data }: LicenceBoxProps) {
  return (
    <VStack space={"8px"}>
      <Text fontSize={20} fontFamily={"Poppins-Bold"}>
        {data.length > 1 ? "Tus licencias:" : "Tu licencia:"}
      </Text>
      <HStack space={3}>
        {data.map((licence, i) => (
          <Box
            key={i}
            background={theme.colors.baseWhite}
            borderRadius={12}
            shadow={"2"}
            padding={"16px"}
            flexDirection={"row"}
            alignItems={"center"}
            style={{ gap: 12 }}
          >
            <Entypo name="controller-record" size={14} color="#2970ff" />

            <Text fontSize={16} fontFamily={"Poppins"}>
              {licence.title}
            </Text>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
}
