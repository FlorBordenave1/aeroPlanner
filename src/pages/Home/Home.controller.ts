import { useEffect, useState } from "react";
import { Linking } from "react-native";
import { CardTypes, CmaObject, LicenceList } from "./Home.types";

export const useHomeController = () => {
  const [cmaObject, setCmaObject] = useState<CmaObject>({
    title: "",
    cardTitle: "",
    cardDescription: "",
    type: "success",
  });

  const expirationDate = "25/05/2024";

  const licenceData: LicenceList = [
    {
      title: "Comercial",
    },
    {
      title: "PPA",
    },
  ];

  const handleOpenWhatsapp = () => {
    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${"5493512515069"}&text=${encodeURIComponent(
        "¡Hola! Quiero agendar un nuevo turno"
      )}`
    );
  };

  const calculateStatusCma = () => {
    const fechaActual = new Date();
    const [dia, mes, año] = expirationDate.split("/");
    const fechaProximaDate = new Date(
      parseInt(año),
      parseInt(mes) - 1,
      parseInt(dia)
    );
    const diferenciaTiempo = fechaProximaDate.getTime() - fechaActual.getTime();
    const diferenciaDias = diferenciaTiempo / (1000 * 3600 * 24);

    let status = "";
    let cardTitle = "";
    let type: CardTypes;

    if (diferenciaDias > 30) {
      status = "Tu CMA está al día";
      cardTitle = "Vence el";
      type = "success";
    } else if (diferenciaDias >= 0) {
      status = "Tu CMA está por vencer";
      cardTitle = "Vence el";
      type = "warning";
    } else {
      status = "Tu CMA está vencido";
      cardTitle = "Venció el";
      type = "error";
    }

    setCmaObject({
      title: status,
      cardTitle,
      cardDescription: expirationDate,
      type,
    });
  };

  useEffect(() => {
    calculateStatusCma();
  }, [expirationDate]);

  return {
    handleOpenWhatsapp,
    cmaObject,
    licenceData,
  };
};
