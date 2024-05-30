import Text from "components/Text";
import { VStack, View } from "native-base";
import { SceneMap } from "react-native-tab-view";
import BoxPdf from "./components/BoxPdf";

export const useDocumentationController = () => {
  const documentationMock = [
    {
      Title: "manuals",
      files: [
        {
          name: "Documentacion LV-S105",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
        {
          name: "337 LV-2105",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
        {
          name: "KJX f337",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
      ],
    },
    {
      Title: "rules",
      files: [],
    },
    {
      Title: "planes",
      files: [
        {
          name: "Matricula prov",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
        {
          name: "337 LV-2105",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
        {
          name: "PolizaFlota",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
      ],
    },
  ];

  const renderDocumentation = (title: "manuals" | "rules" | "planes") => {
    const documentation = documentationMock?.find((doc) => doc.Title === title);

    if (!documentation || documentation?.files?.length === 0) {
      return (
        <View padding={2}>
          <Text font="BODY_MEDIUM">
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

  return { renderScene };
};
