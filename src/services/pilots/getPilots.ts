// pilotService.ts
import { httpClient } from "@http/index";
import { GetPilotsResponse } from "./types";
import { isAxiosError } from "axios";

export const getPilots = async (): Promise<GetPilotsResponse> => {
  try {
    const response = await httpClient.get<GetPilotsResponse>("/users/pilots");
    return response.data;
  } catch (e) {
    if (isAxiosError(e)) {
      if (e.response?.data?.message) {
        throw new Error(e.response.data.message);
      } else {
        throw new Error("Error al obtener pilotos");
      }
    } else {
      throw new Error("Error de red");
    }
  }
};
