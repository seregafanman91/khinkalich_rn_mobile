import { useQuery } from 'react-query';
import { getProducts } from '../api';

export const PRODUCT_QUERY_KEY = 'PRODUCT_QUERY_KEY';

export const useGetProducts = () => {
  return useQuery(PRODUCT_QUERY_KEY, getProducts, { initialData: [] });
};
