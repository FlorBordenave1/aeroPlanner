import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IAuthStore, authResponse } from "./types";

export const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user: authResponse) => set(() => ({ user })),
      setToken: (token: string) => set(() => ({ token })),
    }),
    {
      name: "authStorage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
