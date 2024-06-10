import { Badge, Box, HStack, VStack } from "native-base";
import { LicenceBoxProps } from "./types";
import { theme } from "../../../../../theme";
import { Entypo } from "@expo/vector-icons";
import Text from "components/Text";

export default function LicenceBox({ data }: LicenceBoxProps) {
  return (
    <VStack space={"8px"}>
      <HStack space={1} alignItems={"center"}>
        <Text font="H2_SEMIBOLD">
          {data.length > 1 ? "Tus licencias:" : "Tu licencia:"}
        </Text>
      </HStack>

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
            <Entypo
              name="controller-record"
              size={14}
              color={theme.colors.primary05}
            />

            <Text font="BODY_REGULAR">{licence.title}</Text>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
}
