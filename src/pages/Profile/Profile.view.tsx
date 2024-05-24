import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "native-base";
import { theme } from "../../../theme";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>perfil</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.baseWhite,
  },
});

export default Profile;
