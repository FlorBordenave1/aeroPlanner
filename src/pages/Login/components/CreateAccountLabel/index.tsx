import { StyleSheet } from "react-native";
import { Box, Text } from "native-base";
import { theme } from "../../../../../theme";

interface CreateAccountLabelProps {
  handleOpenWhatsapp: () => void;
}
export default function CreateAccountLabel({
  handleOpenWhatsapp,
}: CreateAccountLabelProps) {
  return (
    <Box style={styles.container}>
      <Text
        fontSize={14}
        color={theme.colors.gray05}
        fontFamily={"Poppins-Regular"}
      >
        Todavía no tenes una cuenta?{" "}
      </Text>
      <Text
        fontSize={14}
        fontWeight={600}
        color={theme.colors.gray05}
        onPress={handleOpenWhatsapp}
        fontFamily={"Poppins-Medium"}
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
