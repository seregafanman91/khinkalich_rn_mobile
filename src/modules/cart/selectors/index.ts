import { createSelector } from 'reselect';
import { type CartState } from '../store/cart-store';

const selectCart = (store: CartState) => store.cart;

export const selectCartList = createSelector(selectCart, (items) => {
  return Object.entries(items).map(([id, count]) => ({ id, count }));
});

export const selectCartDec = (store: CartState) => store.dec;
export const selectCartInc = (store: CartState) => store.inc;

export const selectCartCount = createSelector(selectCart, (items): number => {
  return Object.values(items).reduce((acc, cur) => cur + acc, 0);
});

export const selectCartChange = (store: CartState) => store.change;
