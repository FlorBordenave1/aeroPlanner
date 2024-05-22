import { httpClient } from "@http/index";
import { IAuthenticationService, LoginBody, LoginResponse } from "./types";
import { isAxiosError } from "axios";

export const AuthenticationService: IAuthenticationService = {
  login: async ({ email, password }: LoginBody): Promise<LoginResponse> => {
    try {
      // lo que va a devolver el servicio LoginResponse
      const response = await httpClient.post<LoginResponse>(
        "/auth/authenticate",
        { email, password }
      );
      return response.data;
    } catch (e) {
      if (isAxiosError(e)) {
        throw e.response?.data.message;
      }

      throw new Error(e as string);
    }
  },
};
