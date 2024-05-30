//
import * as React from "react";
import { SceneMap } from "react-native-tab-view";
import { Text, VStack, View } from "native-base";
import CustomSafeAreaView from "components/CustomSafeArea";
import TitlePage from "components/TitlePage";
import BoxPdf from "./components/BoxPdf";
import DocumentationTabs from "./components/DocumentationTabs";
import { useDocumentationController } from "./Documentation.controller";

const Documentation = () => {
  const { documentationMock } = useDocumentationController();

  const renderDocumentation = (title: "manuals" | "rules" | "planes") => {
    const documentation = documentationMock?.find((doc) => doc.Title === title);

    if (!documentation || documentation?.files?.length === 0) {
      return (
        <View padding={2}>
          <Text fontFamily={"Poppins"} fontSize={16} fontWeight={500}>
            No se encontró documentación para el título proporcionado.
          </Text>
        </View>
      );
    }

    return (
      <VStack padding={1} marginTop={3} space={3}>
        {documentation.files.map((file, i) => (
          <BoxPdf key={i} data={file} />
        ))}
      </VStack>
    );
  };

  const renderScene = SceneMap({
    first: () => renderDocumentation("manuals"),
    second: () => renderDocumentation("rules"),
    third: () => renderDocumentation("planes"),
  });

  return (
    <CustomSafeAreaView>
      <TitlePage title="Instructivos" />
      <DocumentationTabs renderScene={renderScene} />
    </CustomSafeAreaView>
  );
};

export default Documentation;
