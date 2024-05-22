import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppNavigatorStack } from "../../navigation/AppNavigator/types";
import { Button } from "native-base";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<AppNavigatorStack>>();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Text>Home</Text>
        <Button mt={8} onPress={() => navigation.navigate("Login")}>
          volver
        </Button>
      </SafeAreaView>
    </View>
  );
};

export default Home;
