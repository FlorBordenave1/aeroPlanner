import { Linking, StyleSheet } from "react-native";
import { Box, Image, Text } from "native-base";
import { theme } from "../../../../../theme";

interface CreateAccountLabelProps {
  handleOpenWhatsapp: () => void;
}
export default function CreateAccountLabel({
  handleOpenWhatsapp,
}: CreateAccountLabelProps) {
  return (
    <Box style={styles.container}>
      <Text fontWeight={500} fontSize={14} color={theme.colors.gray50}>
        Todavía no tenes una cuenta?{" "}
      </Text>
      <Text
        fontWeight={600}
        fontSize={14}
        color={theme.colors.baseWhite}
        onPress={handleOpenWhatsapp}
      >
        Gestiona una
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    bottom: 50,
  },
});
