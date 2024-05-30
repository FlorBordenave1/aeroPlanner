import { StyleSheet } from "react-native";
import { theme } from "../../../theme";
import CustomSafeAreaView from "components/CustomSafeArea";
import TitlePage from "components/TitlePage";
import FlightInfoBox from "./components/FlightInfoBox";
import { ScrollView, VStack } from "native-base";
import { useScheduleController } from "./Schedule.controller";

const Schedule = () => {
  const { flightScheduleData, navigateFlightDetail } = useScheduleController();
  return (
    <CustomSafeAreaView style={styles.container}>
      <TitlePage title="Tus" subtitle="próximos vuelos" />

      <ScrollView>
        <VStack space={3} mt={6} mb={1} paddingLeft={1} paddingRight={1}>
          {flightScheduleData?.map((flightData, i) => (
            <FlightInfoBox
              flightInfo={flightData}
              key={i}
              onClick={navigateFlightDetail}
            />
          ))}
        </VStack>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.baseWhite,
  },
});

export default Schedule;
