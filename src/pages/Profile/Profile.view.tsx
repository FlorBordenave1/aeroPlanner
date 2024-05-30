import CustomSafeAreaView from "components/CustomSafeArea";
import TitlePage from "components/TitlePage";
import { VStack } from "native-base";
import UserForm from "./components/UserForm";

const Profile = () => {
  return (
    <CustomSafeAreaView>
      <TitlePage title="Datos" subtitle="personales" />
      <VStack>
        <UserForm formik={""} />
      </VStack>
    </CustomSafeAreaView>
  );
};

export default Profile;
