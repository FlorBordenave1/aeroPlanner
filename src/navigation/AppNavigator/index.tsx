import { createStackNavigator } from "@react-navigation/stack";
import { AppNavigatorStack } from "./types";
import Login from "../../pages/Login/Login.view";
import TabNavigator from "../TabNavigator";

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
    </Stack.Navigator>
  );
};

export default AppNavigator;
