import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const httpClient = axios.create({
  baseURL: "https://backend-server-develop-develop.up.railway.app/api/v1",
});

httpClient.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("authToken");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error retrieving auth token: ", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
