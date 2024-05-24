import { StyleSheet, SafeAreaView } from "react-native";
import { Text, VStack } from "native-base";
import { theme } from "../../../theme";
import { useHomeController } from "./Home.controller";
import UserName from "./components/UserName";
import InfoBox from "./components/InfoBox";
import CmaInformation from "./components/CmaInformation";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import LicenceBox from "./components/LicenceBox";

const Home = () => {
  const { handleOpenWhatsapp, cmaObject, licenceData } = useHomeController();

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
          cardTitle={"Empieza Junio 27"}
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
          }
        />

        <InfoBox
          direccion="row"
          cardTitle={"35hs"}
          cardDescription={"remanentes"}
          icon={
            <MaterialCommunityIcons
              name="timetable"
              size={20}
              color="#2970ff"
            />
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

        <CmaInformation data={cmaObject} />

        <LicenceBox data={licenceData} />
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
