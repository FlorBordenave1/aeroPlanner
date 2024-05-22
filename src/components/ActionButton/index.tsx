import { Button, Text } from "native-base";
import { ActionButtonProps } from "./types";
import { theme } from "../../../theme";

export default function ActionButton({
  type,
  styles = {},
  isLoading,
  label,
  spinner,
  onPress,
  ...props
}: ActionButtonProps) {
  return (
    <Button
      bg={theme.colors.blue900}
      borderRadius={80}
      height={"48px"}
      isLoading={isLoading}
      onPress={() => onPress()}
      fontFamily={"Poppins"}
      _pressed={{ opacity: 0.7, bg: theme.colors.blue50 }}
      _loading={{
        bg: theme.colors.blue50,
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
