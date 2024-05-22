import { Linking } from "react-native";

export const useHomeController = () => {
  const handleOpenWhatsapp = () => {
    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${"5493512515069"}&text=${encodeURIComponent(
        "¡Hola! Me quiero agendar un nuevo turno"
      )}`
    );
  };

  return {
    handleOpenWhatsapp,
  };
};
