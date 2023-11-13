import { useMemo } from 'react';
import { City, selectCityId, useGetCities, usePlaceStore } from '../modules/place';

export const useCurrentCity = (): City | undefined => {
  const { data } = useGetCities();
  const cityId = usePlaceStore(selectCityId);

  return useMemo(() => {
    return data?.find(({ id }) => id === cityId);
  }, [data, cityId]);
};
