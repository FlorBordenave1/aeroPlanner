import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "native-base";
import { theme } from "../../../theme";

const Schedule = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>agenda</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.baseWhite,
  },
});

export default Schedule;
