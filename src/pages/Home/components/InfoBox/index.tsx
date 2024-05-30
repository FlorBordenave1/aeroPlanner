import { Box, HStack, VStack } from "native-base";
import { InfoBoxProps } from "./types";
import { theme } from "../../../../../theme";
import Text from "components/Text";

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  direccion,
  cardTitle,
  cardDescription,
  icon,
  bg,
}) => {
  return (
    <VStack space={"8px"}>
      {title && <Text font="H2_SEMIBOLD">{title}</Text>}
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
            <Text font="BODY_REGULAR">{cardTitle}</Text>
            <Text font="HELPER_TEXT_REGULAR">{cardDescription}</Text>
          </HStack>
        ) : (
          <VStack>
            <Text font="BODY_REGULAR">{cardTitle}</Text>
            <Text font="HELPER_TEXT_REGULAR">{cardDescription}</Text>
          </VStack>
        )}
      </Box>
    </VStack>
  );
};
export default InfoBox;
