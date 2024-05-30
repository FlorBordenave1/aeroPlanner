import { Box, HStack, VStack } from "native-base";
import { BoxPdfProps } from "./types";
import { theme } from "../../../../../theme";
import PdfButton from "../PdfButton";
import React from "react";
import Text from "components/Text";

const BoxPdf: React.FC<BoxPdfProps> = ({ data }) => {
  return (
    <Box bg={theme.colors.baseWhite} borderRadius={12} shadow={2} p={4}>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <VStack space={1}>
          <Text font="BODY_SEMIBOLD">{data?.name}</Text>
        </VStack>
        <PdfButton url={data.path} fileName={data.name} />
      </HStack>
    </Box>
  );
};

export default BoxPdf;
