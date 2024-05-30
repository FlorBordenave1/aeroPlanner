import React from "react";
import { theme } from "../../../../../theme";
import { Feather } from "@expo/vector-icons";
import { downloadPdf } from "utils/downloadFiles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

interface PdfButtonProps {
  url: string;
  fileName: string;
}

const PdfButton: React.FC<PdfButtonProps> = ({ url, fileName }) => {
  return (
    <TouchableOpacity
      onPress={() => downloadPdf(url, "pdf")}
      style={styles.button}
    >
      <Feather name="download" size={30} color={theme.colors.primary05} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PdfButton;
