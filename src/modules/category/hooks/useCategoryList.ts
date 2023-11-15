import { useMemo } from 'react';
import { useGetProducts } from '../../product';

export const useCategoryList = () => {
  const { data } = useGetProducts();

  return useMemo(() => {
    if (!data) {
      return [];
    }

    const obj: { [key: string]: string } = {};

    data.forEach(({ categoryId, categoryName }) => {
      obj[categoryId] = categoryName;
    });

    return Object.entries(obj).map(([categoryId, categoryName]) => ({ categoryName, categoryId }));
  }, [data]);
};
