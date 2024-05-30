import React from "react";
import { StyleSheet, SafeAreaView, ViewStyle } from "react-native";
import { theme } from "../../../theme";
import { VStack } from "native-base";

interface CustomSafeAreaViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const CustomSafeAreaView: React.FC<CustomSafeAreaViewProps> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <VStack padding={"20px"} marginTop={2} flex={1}>
        {children}
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.baseWhite,
  },
});

export default CustomSafeAreaView;
