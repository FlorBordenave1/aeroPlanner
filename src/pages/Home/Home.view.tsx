import { StyleSheet, SafeAreaView } from "react-native";
import { Text, VStack } from "native-base";
import { theme } from "../../../theme";
import UserName from "./components/UserName";
import InfoBox from "./components/InfoBox";
import { AntDesign } from "@expo/vector-icons";
import { useHomeController } from "./Home.controller";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = () => {
  const { handleOpenWhatsapp } = useHomeController();

  return (
    <SafeAreaView style={styles.container}>
      <VStack
        bg={theme.colors.baseWhite}
        flex={1}
        padding={"16px"}
        marginTop={2}
        space={4}
      >
        <UserName name="German" />
        <InfoBox
          title={"Tu próximo vuelo:"}
          cardTitle={" Empieza Junio 27"}
          cardDescription={"20 días restantes"}
          icon={<AntDesign name="clockcircleo" size={20} color="#2970ff" />}
        />

        <InfoBox
          direccion="row"
          title={"Tenés un total de:"}
          cardTitle={"68hs"}
          cardDescription={"acumuladas"}
          icon={
            <MaterialCommunityIcons
              name="airplane-check"
              size={24}
              color="#2970ff"
            />

            // <FontAwesome6 name="plane-circle-check" size={20} color="#2970ff" />
          }
        />

        <Text
          fontSize={14}
          color={"#2970ff"}
          onPress={handleOpenWhatsapp}
          fontFamily={"Poppins-Bold"}
        >
          Agendar nuevo turno
        </Text>

        <InfoBox
          direccion="row"
          title={"Tu CMA esta al dia"}
          cardTitle={"Vence el:"}
          cardDescription={"12/12/2024"}
          icon={<AntDesign name="calendar" size={20} color="#14532d" />}
          bg={"#DCFCE7"}
        />
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.baseWhite,
  },
});

export default Home;
