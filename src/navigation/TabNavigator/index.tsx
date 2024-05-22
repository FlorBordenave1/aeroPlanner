import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigatorStack } from "./types";
import Calendar from "@pages/Calendar";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import Home from "@pages/Home/Home.view";

const Tab = createBottomTabNavigator<TabNavigatorStack>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#252A30",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"home"} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="calendar" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
