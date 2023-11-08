import { useMemo } from 'react';
import { selectCartList, useCartStore } from '../../../modules/cart';
import { type Product, useGetProducts } from '../../../modules/product';

export const useCartProducts = () => {
  const cart = useCartStore(selectCartList);
  const { data: products } = useGetProducts();

  const mapProducts = useMemo(() => {
    return Object.fromEntries(products.map((item) => [item.id, item]));
  }, [products]);

  return useMemo(() => {
    const result: Array<{ count: number; data: Product }> = [];

    cart.forEach(({ id, count }) => {
      if (!Object.prototype.hasOwnProperty.call(mapProducts, id)) return;

      result.push({
        count,
        data: mapProducts[id],
      });
    });

    return result;
  }, [cart, mapProducts]);
};
