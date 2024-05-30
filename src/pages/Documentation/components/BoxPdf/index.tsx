import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import { theme } from "../../../../../theme";
import { StyleSheet } from "react-native";
import { BoxPdfProps } from "./types";
import { TouchableOpacity } from "react-native-gesture-handler";
import PdfButton from "../PdfButton";

const BoxPdf: React.FC<BoxPdfProps> = ({ data }) => {
  return (
    <TouchableOpacity
    // onPress={onClick}
    >
      <Box bg={theme.colors.baseWhite} borderRadius={12} shadow={2} p={4}>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <VStack space={1}>
            <Text {...styles.bold}>{data?.name}</Text>
            {/* <Text {...styles.description}>últ act 12/03/2024</Text> */}
          </VStack>
          <PdfButton url={data.path} fileName={data.name} />
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: theme.colors.gray03,
  },
  bold: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#525d6c",
  },
  description: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: theme.colors.gray03,
  },
});

export default BoxPdf;
