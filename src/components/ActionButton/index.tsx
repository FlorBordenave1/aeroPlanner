import { Button, Text } from "native-base";
import { ActionButtonProps } from "./types";
import { theme } from "../../../theme";

export default function ActionButton({
  type,
  styles = {},
  isLoading,
  label,
  spinner,
  disabled,
  onPress,
  ...props
}: ActionButtonProps) {
  return (
    <Button
      isDisabled={disabled}
      bg={theme.colors.primary05}
      borderRadius={8}
      height={"48px"}
      isLoading={isLoading}
      onPress={() => onPress()}
      fontFamily={"Poppins"}
      _pressed={{ opacity: 0.7, bg: theme.colors.primary04 }}
      _loading={{
        bg: theme.colors.gray03,
      }}
      _spinner={{
        color: "white",
      }}
      {...props}
    >
      <Text fontFamily={"Poppins"} color={theme.colors.baseWhite}>
        {label}
      </Text>
    </Button>
  );
}
