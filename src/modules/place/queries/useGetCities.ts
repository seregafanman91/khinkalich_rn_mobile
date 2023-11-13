import { useQuery } from 'react-query';
import { getCities } from '../api';

export const PRODUCT_QUERY_KEY = 'CITI_QUERY_KEY';

export const useGetCities = () => {
  return useQuery(PRODUCT_QUERY_KEY, getCities, { initialData: [] });
};
