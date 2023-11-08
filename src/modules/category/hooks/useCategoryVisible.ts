import { useMemo, useRef, useState } from 'react';
import { debounce } from '../../../utils/debounce';
import { type Product } from '../../../types/product';

const DEBOUNCE_TIMEOUT = 100;

export const useCategoryVisible = (data: Product[]) => {
  const [visibleCategoryId, setVisibleCategoryId] = useState(null);

  const throttledViewableItemsChanged = useMemo(() => {
    return debounce(({ viewableItems }) => {
      const lastIndex = viewableItems.at(-1).index;
      const atIndex = lastIndex !== data.length - 1 ? 0 : -1;

      setVisibleCategoryId(viewableItems.at(atIndex).item.categoryId);
    }, DEBOUNCE_TIMEOUT);
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    {
      onViewableItemsChanged: throttledViewableItemsChanged,
      viewabilityConfig: {
        itemVisiblePercentThreshold: 0,
      },
    },
  ]);

  return {
    viewabilityConfigCallbackPairs,
    visibleCategoryId,
  };
};
