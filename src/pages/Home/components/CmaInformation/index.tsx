import { Box, HStack, Text, VStack } from "native-base";
import { InfoBoxProps } from "./types";
import { theme } from "../../../../../theme";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function CmaInformation({ data }: InfoBoxProps) {
  const { title, cardTitle, cardDescription, type } = data;

  const color = theme.colors;

  const renderBackgroundColor = () => {
    if (type === "success") return color.success00;
    if (type === "error") return color.error00;
    if (type === "warning") return color.warning00;
  };

  const renderIcon = () => {
    if (type === "success")
      return (
        <AntDesign name="checkcircleo" size={20} color={color.success05} />
      );
    if (type === "error")
      return (
        <Ionicons name="alert-circle-outline" size={24} color={color.error05} />
      );
    if (type === "warning")
      return (
        <Ionicons
          name="alert-circle-outline"
          size={24}
          color={color.warning05}
        />
      );
  };

  return (
    <VStack space={"16px"}>
      <Text fontSize={20} fontFamily={"Poppins-Bold"}>
        {title}
      </Text>
      <Box
        background={renderBackgroundColor()}
        borderRadius={12}
        shadow={"2"}
        padding={"16px"}
        flexDirection={"row"}
        alignItems={"center"}
        style={{ gap: 11 }}
      >
        {renderIcon()}
        <HStack alignItems={"center"} space={2}>
          <Text fontSize={16} fontFamily={"Poppins"}>
            {cardTitle}
          </Text>
          <Text fontSize={14} fontFamily={"Poppins"} color={color.gray03}>
            {cardDescription}
          </Text>
        </HStack>
      </Box>
    </VStack>
  );
}
