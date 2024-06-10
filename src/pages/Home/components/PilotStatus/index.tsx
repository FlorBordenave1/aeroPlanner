import { theme } from "../../../../../theme";
import { Badge, HStack } from "native-base";
import Text from "components/Text";
import CustomIcon from "../CustomIcon";
interface CustomIconProps {
  flyAlone: boolean;
}

const PilotStatus = ({ flyAlone }: CustomIconProps) => {
  return (
    <Badge
      colorScheme={flyAlone ? theme.colors.primary05 : "warning"}
      borderRadius={20}
      p={2}
      backgroundColor={
        flyAlone ? theme.colors.primary01 : theme.colors.warning00
      }
    >
      <HStack space={2}>
        <CustomIcon
          name={flyAlone ? "checkcircleo" : "account-supervisor"}
          iconType={flyAlone ? "AntDesign" : "MaterialCommunityIcons"}
          color={flyAlone ? theme.colors.primary05 : theme.colors.warning05}
        />
        <Text
          font="BODY_MEDIUM"
          color={flyAlone ? theme.colors.primary05 : theme.colors.warning05}
        >
          {flyAlone ? "Volas solo" : "Volas con acompañamiento"}
        </Text>
      </HStack>
    </Badge>
  );
};

export default PilotStatus;
