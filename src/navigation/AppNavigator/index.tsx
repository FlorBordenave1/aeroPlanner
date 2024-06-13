import { AppNavigatorStack } from "./types";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuthStore } from "zustand/useAuthStorage";
import EvaluationForm from "@pages/EvaluationForm/EvaluationForm.view";
import FlightDetail from "@pages/FlightDetail/FlightDetail.view";
import Login from "../../pages/Login/Login.view";
import TabNavigator from "../TabNavigator";

enum UserRole {
  Admin = "admin",
  Instructor = "instructor",
  Pilot = "pilot",
}

const AppNavigator = () => {
  const userRole = useAuthStore((state) => state.user?.user.role.name);

  const Stack = createStackNavigator<AppNavigatorStack>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />

      {/* {userRole === UserRole.Instructor && ( */}
      {userRole === UserRole.Instructor && (
        <Stack.Screen name="EvaluationForm" component={EvaluationForm} />
      )}

      {(userRole === UserRole.Pilot || UserRole.Admin) && (
        // {userRole === UserRole.Pilot && (
        <>
          <Stack.Screen name="Tabs" component={TabNavigator} />
          <Stack.Screen name="FlightDetail" component={FlightDetail} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
