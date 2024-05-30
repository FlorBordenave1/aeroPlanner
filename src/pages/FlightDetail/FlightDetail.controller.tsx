import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TabNavigatorStack } from "@navigation/TabNavigator/types";

export const useFlightDetailController = () => {
  const navigation = useNavigation<StackNavigationProp<TabNavigatorStack>>();

  const handleGoBack = () => {
    navigation.navigate("Schedule");
  };

  return {
    handleGoBack,
  };
};
