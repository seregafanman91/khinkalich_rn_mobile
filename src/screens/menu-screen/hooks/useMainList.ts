import { useMemo } from 'react';
import { useGetProducts } from '../../../modules/product';

const enum Types {
  slider = 'slider',
  navList = 'navList',
  product = 'product',
}

export type MainListItem = any;

const SLIDER = {
  id: Types.slider,
  type: Types.slider,
};

const NAV_LIST = {
  id: Types.navList,
  type: Types.navList,
};

export const useMainList = (): MainListItem[] => {
  const { data } = useGetProducts();

  return useMemo(() => {
    if (!data?.length) {
      return [];
    }

    return [SLIDER, NAV_LIST, ...data.map((item) => ({ ...item, type: Types.product }))];
  }, [data]);
};
