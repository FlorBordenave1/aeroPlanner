import { StackNavigationProp } from "@react-navigation/stack";
import { FlightInfo } from "./Schedule.types";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorStack } from "@navigation/AppNavigator/types";

export const useScheduleController = () => {
  const navigation = useNavigation<StackNavigationProp<AppNavigatorStack>>();

  const flightScheduleData: FlightInfo[] = [
    {
      date: "12/06/2024",
      time: "14:00",
      remainingDays: 20,
      withInstructor: true,
      planeModel: "LV-S105",
      destination: "Mar del plata",
      origin: "SFO",
    },
    {
      date: "15/06/2024",
      time: "10:30",
      remainingDays: 17,
      withInstructor: false,
      planeModel: "LV-KJX",
      destination: "Mar del plata",
      origin: "SFO",
    },
    {
      date: "18/06/2024",
      time: "08:45",
      remainingDays: 14,
      withInstructor: true,
      planeModel: "LV-KJX",
      destination: "Mar del plata",
      origin: "SFO",
    },
    {
      date: "21/06/2024",
      time: "16:15",
      remainingDays: 11,
      withInstructor: false,
      planeModel: "LV-KJX",
      destination: "Mar del plata",
      origin: "SFO",
    },
    {
      date: "24/06/2024",
      time: "13:20",
      remainingDays: 8,
      withInstructor: true,
      planeModel: "Lv-s37",
      destination: "Mar del plata",
      origin: "SFO",
    },
    {
      date: "27/06/2024",
      time: "09:00",
      remainingDays: 5,
      withInstructor: false,
      planeModel: "LV-KJX",
      destination: "Mar del plata",
      origin: "SFO",
    },
    {
      date: "30/06/2024",
      time: "11:45",
      remainingDays: 2,
      withInstructor: true,
      planeModel: "LV-S105",
      destination: "Mar del plata",
      origin: "SFO",
    },
  ];

  const navigateFlightDetail = () => {
    navigation.navigate("FlightDetail");
  };

  return {
    flightScheduleData,
    navigateFlightDetail,
  };
};
