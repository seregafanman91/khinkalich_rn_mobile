import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { type Place } from '../types/place';

export interface PlaceState {
  place: Place | null;
  setPlace: (city: Place) => void;
}

export const usePlaceStore = create<PlaceState>()(
  persist(
    immer((set) => ({
      place: null,
      setPlace: (city: Place) => {
        set((state) => (state.place = city));
      },
    })),
    {
      name: 'place-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
