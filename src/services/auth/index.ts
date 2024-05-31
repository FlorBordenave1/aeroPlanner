import { httpClient } from "@http/index";
import { IAuthenticationService, LoginBody, LoginResponse } from "./types";
import { isAxiosError } from "axios";

export const AuthenticationService: IAuthenticationService = {
  login: async ({ email, password }: LoginBody): Promise<LoginResponse> => {
    try {
      const response = await httpClient.post<LoginResponse>(
        "/auth/authenticate",
        { email, password }
      );
      return response.data;
    } catch (e) {
      if (isAxiosError(e)) {
        if (e.response?.data?.message) {
          throw new Error(e.response.data.message);
        } else {
          throw new Error("Error de autenticación");
        }
      } else {
        throw new Error("Error de red");
      }
    }
  },
};
