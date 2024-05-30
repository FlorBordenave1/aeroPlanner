import { createStackNavigator } from "@react-navigation/stack";
import { AppNavigatorStack } from "./types";
import Login from "../../pages/Login/Login.view";
import TabNavigator from "../TabNavigator";
import FlightDetail from "@pages/FlightDetail/FlightDetail.view";

const Stack = createStackNavigator<AppNavigatorStack>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="FlightDetail" component={FlightDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
