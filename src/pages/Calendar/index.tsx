import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
  WeekCalendar,
} from "react-native-calendars";
import { agendaItems, getMarkedDates } from "./mock";
import { useCallback, useRef } from "react";
import AgendaItem from "./item";
import React from "react";
import { getTheme, lightThemeColor } from "./theme";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

interface Props {
  weekView?: boolean;
}

const Calendar = (props: Props) => {
  const { weekView } = props;
  const marked = useRef(getMarkedDates());
  const todayBtnTheme = useRef(getTheme());

  const renderItem = useCallback(({ item }: any) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CalendarProvider
        date={agendaItems[1].title}
        theme={todayBtnTheme.current}
        showTodayButton
      >
        {weekView ? (
          <WeekCalendar firstDay={1} markedDates={marked.current} />
        ) : (
          <ExpandableCalendar
            // horizontal={false}
            // hideArrows
            // disablePan
            // hideKnob
            // initialPosition={ExpandableCalendar.positions.OPEN}
            // calendarStyle={styles.calendar}
            // headerStyle={styles.header} // for horizontal only
            // disableWeekScroll
            // disableAllTouchEventsForDisabledDays
            firstDay={1}
            markedDates={marked.current}
            //   leftArrowImageSource={leftArrowIcon}
            //   rightArrowImageSource={rightArrowIcon}
            animateScroll
            // closeOnDayPress={false}
            // indicatorStyle={"white"}
          />
        )}

        <AgendaList
          sections={agendaItems}
          renderItem={renderItem}
          sectionStyle={styles.section}
        />
      </CalendarProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  section: {
    backgroundColor: lightThemeColor,
    color: "grey",
    textTransform: "capitalize",
  },
});

export default Calendar;
