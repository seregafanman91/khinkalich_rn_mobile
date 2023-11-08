import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface CartState {
  cart: Record<string, number>;
  change: (id: string, count: number) => void;
  inc: (id: string, count?: number) => void;
  dec: (id: string, count?: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    immer((set, get) => ({
      cart: {},
      change: (id: string, count: number) => {
        if (count <= 0) {
          set((state) => {
            delete state.cart[id];
          });
        } else {
          set((state) => {
            state.cart[id] = count;
          });
        }
      },
      inc(id: string, count: number = 1) {
        const { cart } = get();

        if (Object.prototype.hasOwnProperty.call(cart, id)) {
          set((state) => {
            state.cart[id] = state.cart[id] + count;
          });
        } else {
          set((state) => {
            state.cart[id] = count;
          });
        }
      },
      dec(id: string, count: number = 1) {
        const { cart } = get();

        if (Object.prototype.hasOwnProperty.call(cart, id)) {
          return;
        }

        const cartCount = cart[id];
        const nextCount = cartCount - count;

        if (nextCount <= 0) {
          set((state) => {
            delete state.cart[id];
          });
        } else {
          set((state) => {
            state.cart[id] = nextCount;
          });
        }
      },
    })),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
