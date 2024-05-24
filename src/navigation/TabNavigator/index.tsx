import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigatorStack } from "./types";
import Calendar from "@pages/Calendar";
import Home from "@pages/Home/Home.view";
import {
  FontAwesome5,
  Ionicons,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import Documentation from "@pages/Documentation/Documentation.view";
import Profile from "@pages/Profile/Profile.view";
import Schedule from "@pages/Schedule/Schedule.view";
import { theme } from "../../../theme";

const Tab = createBottomTabNavigator<TabNavigatorStack>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary05,
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
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: "Agenda",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="checklist" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: "Calendario",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="calendar-alt" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Documentation"
        component={Documentation}
        options={{
          tabBarLabel: "Instructivos",
          tabBarIcon: ({ color }) => (
            <Ionicons name="document-attach" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-large" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
