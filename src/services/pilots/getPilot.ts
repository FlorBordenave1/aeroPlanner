// pilotService.ts
import { httpClient } from "@http/index";
import { GetPilotsResponse } from "./types";
import { isAxiosError } from "axios";

export const getPilot = async (): Promise<GetPilotsResponse> => {
  try {
    const response = await httpClient.get<GetPilotsResponse>("/users/me");
    return response.data;
  } catch (e) {
    if (isAxiosError(e)) {
      if (e.response?.data?.message) {
        throw new Error(e.response.data.message);
      } else {
        throw new Error("Error al obtener los datos del usuario");
      }
    } else {
      throw new Error("Error de red");
    }
  }
};
