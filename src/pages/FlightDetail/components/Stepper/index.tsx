import React from "react";
import { StyleSheet, View } from "react-native";
import { StepperProps } from "./types";
import StepIndicator from "react-native-step-indicator";
import { theme } from "../../../../../theme";
import { Entypo } from "@expo/vector-icons";

const Stepper: React.FC<StepperProps> = ({}) => {
  const labels = ["SFO", "BS AS", "SFO"];

  const stepIndicatorStyles = {
    currentStepLabelColor: theme.colors.gray05,
    labelColor: theme.colors.gray05,
    labelFontFamily: "Poppins",
    labelSize: 16,
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: "transparent",
    separatorFinishedColor: "transparent",
    separatorUnFinishedColor: theme.colors.primary05,
    stepIndicatorFinishedColor: "transparent",
    stepIndicatorUnFinishedColor: "transparent",
    stepIndicatorCurrentColor: "transparent",
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: "transparent",
    stepIndicatorLabelFinishedColor: "transparent",
    stepIndicatorLabelUnFinishedColor: "transparent",
    labelAlign: `flex-start`,
  };

  return (
    <View style={styles.container}>
      <StepIndicator
        // @ts-ignore
        customStyles={stepIndicatorStyles}
        stepCount={labels.length}
        labels={labels}
        direction="vertical"
        renderStepIndicator={() => (
          <Entypo
            name="controller-record"
            size={16}
            color={theme.colors.primary05}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
});

export default Stepper;
