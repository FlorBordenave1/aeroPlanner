import React from "react";
import { Text, View } from "native-base";
import { TitlePageProps } from "./types";
import { theme } from "../../../theme";
import { TextStyle } from "react-native";

const titleTextStyle: TextStyle = {
  fontSize: 32,
  fontFamily: "Poppins-Bold",
  fontWeight: "bold",
  lineHeight: 36,
};

const TitlePage: React.FC<TitlePageProps> = ({
  title,
  subtitle,
  isRowLayout,
}) => {
  const renderContent = () => (
    <>
      <Text style={titleTextStyle}>{title} </Text>
      {subtitle && (
        <Text style={{ ...titleTextStyle, color: theme.colors.primary05 }}>
          {subtitle}
        </Text>
      )}
    </>
  );

  return (
    <>
      {isRowLayout ? (
        <View flexDirection="row" alignItems="center">
          {renderContent()}
        </View>
      ) : (
        renderContent()
      )}
    </>
  );
};

export default TitlePage;
