import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

export const downloadPdf = async (fileUri: string, fileType: string) => {
  try {
    let extension = "";
    let conversionRequired = false;

    switch (fileType) {
      case "pdf":
        extension = ".pdf";
        break;
      case "image":
        extension = ".jpg";
        if (!fileUri.endsWith(".jpg") && !fileUri.endsWith(".png")) {
          // convertir a imagen
          conversionRequired = true;
        }
        break;
      default:
        console.error("Tipo de archivo no soportado:", fileType);
        return;
    }

    const downloadResult = await FileSystem.downloadAsync(
      fileUri,
      FileSystem.documentDirectory + "file" + extension
    );

    if (downloadResult.status === 200) {
      //   if (conversionRequired && fileType === "image") {
      //     // Convertir a imagen
      //     await MediaLibrary.createAssetAsync(downloadResult.uri);
      //   }
      await Sharing.shareAsync(downloadResult.uri);
    } else {
      console.log("Error en la descarga:", downloadResult);
    }
  } catch (error) {
    console.error("Error al descargar el archivo:", error);
  }
};
