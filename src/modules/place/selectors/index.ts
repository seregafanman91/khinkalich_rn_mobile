import { type PlaceState } from '../store/place-store';

export const selectPlaceId = (store: PlaceState) => store.placeId;
export const selectCityId = (store: PlaceState) => store.cityId;

export const selectSetPlace = (store: PlaceState) => store.setPlace;
