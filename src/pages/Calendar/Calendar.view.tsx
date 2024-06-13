import React from "react";
import { Calendar } from "react-native-big-calendar";
import { StyleSheet, SafeAreaView } from "react-native";
import { theme } from "../../../theme";
import TitlePage from "components/TitlePage";
import { View } from "native-base";

interface Props {
  weekView?: boolean;
}

const events = [
  {
    title: "Meeting",
    start: new Date(2024, 5, 10, 14, 0),
    end: new Date(2024, 5, 10, 14, 30),
  },
  {
    title: "Coffee break",
    start: new Date(2024, 5, 11, 10, 0),
    end: new Date(2024, 5, 11, 10, 30),
  },
  {
    title: "Team Lunch",
    start: new Date(2024, 5, 12, 12, 0),
    end: new Date(2024, 5, 12, 13, 0),
  },
  {
    title: "Project Review",
    start: new Date(2024, 5, 13, 9, 0),
    end: new Date(2024, 5, 13, 10, 0),
  },
  {
    title: "Client Call",
    start: new Date(2024, 5, 14, 16, 0),
    end: new Date(2024, 5, 14, 16, 30),
  },
  {
    title: "Weekly Planning",
    start: new Date(2024, 5, 15, 11, 0),
    end: new Date(2024, 5, 15, 12, 0),
  },
];

const themeCalendar = {
  palette: {
    primary: {
      main: theme.colors.primary04,
      contrastText: "#000",
    },

    typography: {
      fontFamily: "Poppins-Bold",
      moreLabel: "Poppins-Bold",
    },
  },
};

const CalendarPage = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View paddingX={5} marginBottom={3}>
        <TitlePage title="" subtitle="Calendario" />
      </View>
      <Calendar
        events={events}
        height={600}
        weekStartsOn={1}
        onPressEvent={(e) => console.log(e)}
        theme={themeCalendar}
        dayHeaderStyle={{
          alignContent: "flex-start",
        }}
        dayHeaderHighlightColor={theme.colors.primary05}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.baseWhite,
  },
});

export default CalendarPage;
