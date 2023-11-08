import { type PlaceState } from '../store/place-store';

export const selectPlace = (store: PlaceState) => store.place;
export const selectSetPlace = (store: PlaceState) => store.setPlace;
