import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// AsyncStorage.clear();

export interface PlaceState {
  cityId: string | null;
  placeId: string | null;
  setPlace: (cityId: string, placeId: string) => void;
}

export const usePlaceStore = create<PlaceState>()(
  persist(
    immer((set) => ({
      cityId: null,
      placeId: null,
      setPlace: (cityId: string, placeId: string) => {
        set((state) => {
          state.cityId = cityId;
          state.placeId = placeId;
        });
      },
    })),
    {
      name: 'place-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
