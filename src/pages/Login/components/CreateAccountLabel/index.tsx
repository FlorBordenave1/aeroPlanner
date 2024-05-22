import { StyleSheet } from "react-native";
import { Box, Text } from "native-base";

interface CreateAccountLabelProps {
  handleOpenWhatsapp: () => void;
}
export default function CreateAccountLabel({
  handleOpenWhatsapp,
}: CreateAccountLabelProps) {
  return (
    <Box style={styles.container}>
      <Text fontSize={14} color={"#373A40"} fontFamily={"Poppins-Regular"}>
        Todavía no tenes una cuenta?{" "}
      </Text>
      <Text
        fontSize={14}
        fontWeight={600}
        color={"#373A40"}
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
