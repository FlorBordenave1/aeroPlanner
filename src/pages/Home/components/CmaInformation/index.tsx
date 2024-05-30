import { Box, HStack, VStack } from "native-base";
import { CardTypes, CmaInformationProps } from "./types";
import { theme } from "../../../../../theme";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Text from "components/Text";

const CmaInformation: React.FC<CmaInformationProps> = ({ data }) => {
  const { title, cardTitle, cardDescription, type } = data;

  const color = theme.colors;

  const renderBackgroundColor = (type: CardTypes) => {
    const types = {
      ["success"]: theme.colors.success00,
      ["error"]: theme.colors.error00,
      ["warning"]: theme.colors.warning00,
    };
    return types[type];
  };

  const renderIcon = (type: CardTypes) => {
    const typesOfIcons = {
      ["success"]: (
        <AntDesign name="checkcircleo" size={20} color={color.success05} />
      ),
      ["error"]: (
        <Ionicons name="alert-circle-outline" size={24} color={color.error05} />
      ),
      ["warning"]: (
        <Ionicons
          name="alert-circle-outline"
          size={24}
          color={color.warning05}
        />
      ),
    };
    return typesOfIcons[type];
  };

  return (
    <VStack space={"16px"}>
      <Text font="H2_SEMIBOLD">{title}</Text>
      <Box
        background={renderBackgroundColor(type)}
        borderRadius={12}
        shadow={"2"}
        padding={"16px"}
        flexDirection={"row"}
        alignItems={"center"}
        style={{ gap: 11 }}
      >
        {renderIcon(type)}
        <HStack alignItems={"center"} space={2}>
          <Text font="BODY_REGULAR">{cardTitle}</Text>
          <Text font="HELPER_TEXT_REGULAR">{cardDescription}</Text>
        </HStack>
      </Box>
    </VStack>
  );
};

export default CmaInformation;
