import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigatorStack } from "./types";
import Home from "../../pages/Home";

const Tab = createBottomTabNavigator<TabNavigatorStack>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
