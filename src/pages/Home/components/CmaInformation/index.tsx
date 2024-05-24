import { Box, HStack, Text, VStack } from "native-base";
import { InfoBoxProps } from "./types";
import { theme } from "../../../../../theme";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function CmaInformation({ data }: InfoBoxProps) {
  const { title, cardTitle, cardDescription, type } = data;

  const renderBackgroundColor = () => {
    if (type === "success") return "#ecfdf3";
    if (type === "error") return "#fef3f2";
    if (type === "warning") return "#fffaeb";
  };

  const renderIcon = () => {
    if (type === "success")
      return <AntDesign name="checkcircleo" size={20} color="#039855" />;
    if (type === "error")
      return <Ionicons name="alert-circle-outline" size={24} color="#d92d29" />;
    if (type === "warning")
      return <Ionicons name="alert-circle-outline" size={24} color="#DC6803" />;
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
          <Text
            fontSize={14}
            fontFamily={"Poppins"}
            color={theme.colors.blue50}
          >
            {cardDescription}
          </Text>
        </HStack>
      </Box>
    </VStack>
  );
}
