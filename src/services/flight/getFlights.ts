// pilotService.ts
import { httpClient } from "@http/index";
import { isAxiosError } from "axios";
import { getFlightsResponse } from "./types";

export const getFlights = async (): Promise<getFlightsResponse> => {
  try {
    const response = await httpClient.get<getFlightsResponse>("/flight");

    return response.data;
  } catch (e) {
    if (isAxiosError(e)) {
      if (e.response?.data?.message) {
        throw new Error(e.response.data.message);
      } else {
        throw new Error("Error al obtener los");
      }
    } else {
      throw new Error("Error de red");
    }
  }
};
