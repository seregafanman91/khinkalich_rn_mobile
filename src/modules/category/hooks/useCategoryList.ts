import { useMemo } from 'react';
import { useGetProducts } from '../../product';
import { type CategoryListData } from '../category-list';

export const useCategoryList = () => {
  const { data } = useGetProducts();

  return useMemo(() => {
    if (!data) {
      return [];
    }

    const obj: Partial<CategoryListData> = {};

    data.forEach(({ categoryId, categoryName }) => {
      obj[categoryId] = categoryName;
    });

    return Object.entries(obj).map(([categoryId, categoryName]) => ({ categoryName, categoryId }));
  }, [data]);
};
