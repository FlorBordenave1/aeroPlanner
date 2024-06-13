import { Badge, HStack, VStack } from "native-base";
import { theme } from "../../../theme";
import { useHomeController } from "./Home.controller";
import InfoBox from "./components/InfoBox";
import CmaInformation from "./components/CmaInformation";
import LicenceBox from "./components/LicenceBox";
import CustomIcon from "./components/CustomIcon";
import CustomSafeAreaView from "components/CustomSafeArea";
import TitlePage from "components/TitlePage";
import Text from "components/Text";
import PilotStatus from "./components/PilotStatus";

const Home: React.FC = () => {
  const { handleOpenWhatsapp, cmaObject, licenceData } = useHomeController();

  const flyAlone = true;
  return (
    <CustomSafeAreaView>
      <VStack bg={theme.colors.baseWhite} flex={1} space={4}>
        <TitlePage title="Hola," subtitle="German" />

        <InfoBox
          title={"Tu próximo vuelo:"}
          cardTitle={"Empieza Junio 27"}
          cardDescription={"20 días restantes"}
          icon={<CustomIcon iconType="AntDesign" name="clockcircleo" />}
        />
        <PilotStatus flyAlone={flyAlone} />

        <InfoBox
          direccion="row"
          title={"Tenés un total de:"}
          cardTitle={"35hs"}
          cardDescription={"remanentes"}
          icon={<CustomIcon name="timetable" />}
        />

        <Text
          font="BT_SMALL_MEDIUM"
          color={theme.colors.primary05}
          onPress={handleOpenWhatsapp}
        >
          Agendar nuevo turno
        </Text>

        <CmaInformation data={cmaObject} />

        <LicenceBox data={licenceData} />
      </VStack>
    </CustomSafeAreaView>
  );
};

export default Home;
