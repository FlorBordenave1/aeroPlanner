import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://backend-server-develop-develop.up.railway.app/api/v1",
});
