import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "native-base";
import { theme } from "../../../theme";

const Documentation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>documentatiom</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.baseWhite,
  },
});

export default Documentation;
