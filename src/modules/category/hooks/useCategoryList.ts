import { useMemo } from 'react';
import { type CategoryListData } from '../category-list';
import { type Product } from '../../product';

export const useCategoryList = (data: Product[]) => {
  return useMemo(() => {
    const obj: Partial<CategoryListData> = {};

    data.forEach(({ categoryId, categoryName }) => {
      obj[categoryId] = categoryName;
    });

    return Object.entries(obj).map(([categoryId, categoryName]) => ({ categoryName, categoryId }));
  }, [data]);
};
