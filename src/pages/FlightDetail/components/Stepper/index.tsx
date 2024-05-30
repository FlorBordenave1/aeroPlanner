import { Entypo } from "@expo/vector-icons";
import { StepperProps } from "./types";
import { theme } from "../../../../../theme";
import { VStack } from "native-base";
import React from "react";
import StepIndicator from "react-native-step-indicator";

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
    separatorUnFinishedColor: theme.colors.primary05,
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    labelAlign: `flex-start`,
    stepStrokeCurrentColor: "transparent",
    separatorFinishedColor: "transparent",
    stepIndicatorFinishedColor: "transparent",
    stepIndicatorUnFinishedColor: "transparent",
    stepIndicatorCurrentColor: "transparent",
    stepIndicatorLabelCurrentColor: "transparent",
    stepIndicatorLabelFinishedColor: "transparent",
    stepIndicatorLabelUnFinishedColor: "transparent",
  };

  return (
    <VStack height={150}>
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
    </VStack>
  );
};

export default Stepper;
