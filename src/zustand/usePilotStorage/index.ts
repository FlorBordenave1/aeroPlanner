import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Pilot, IPilotStorage } from "./types";

export const usePilotStorage = create<IPilotStorage>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: Pilot) => set(() => ({ user })),
    }),
    {
      name: "pilotStorage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
