import React, { useRef, useState } from 'react';
import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, ViewToken } from 'react-native';
import { StoriesSlider } from '../../../components/stories-slider';
import { selectCartInc, useCartStore } from '../../../modules/cart';
import { CategoryList, useCategoryList } from '../../../modules/category';
import { ProductPreviewCard } from '../../../modules/product';
import { MainListItem, useMainList } from '../hooks/useMainList';
import { useSyncList } from '../hooks/useSyncList';

const onKeyExtractor = (item: MainListItem) => item.id;

const STICKY_CATEGORY_LIST_OFFSET = 124;

export const MenuProductList = () => {
  const incCart = useCartStore(selectCartInc);

  const categoryListData = useCategoryList();
  const menuList = useMainList();

  const [scrollTop, setScrollTop] = useState<number>(0);

  const bottomTabBarHeight = useBottomTabBarHeight();

  const indent = bottomTabBarHeight - 35;

  const {
    menuListRef,
    categoryListRef,
    setMenuListCategoryId,
    setCategoryListCategoryId,
    visibleCategoryId,
  } = useSyncList(menuList, categoryListData);

  const viewabilityConfigCallbackPairs = useRef([
    {
      onViewableItemsChanged: ({ viewableItems }: { viewableItems: ViewToken[] }) => {
        setMenuListCategoryId(viewableItems.at(0)!.item.categoryId ?? null);
      },
      viewabilityConfig: {
        itemVisiblePercentThreshold: 0,
      },
    },
  ]);

  const renderItem = ({ item, index }: ListRenderItemInfo<MainListItem>) => {
    if (index === 0) {
      return <StoriesSlider />;
    } else if (index === 1) {
      return (
        <CategoryList
          shadow={categoryShadow}
          ref={categoryListRef}
          data={categoryListData}
          visibleCategoryId={visibleCategoryId}
          onItemPress={setCategoryListCategoryId}
        />
      );
    }

    return <ProductPreviewCard onBuyPress={incCart} data={item} />;
  };

  const handleScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollTop(nativeEvent.contentOffset.y);
  };

  const categoryShadow = scrollTop > STICKY_CATEGORY_LIST_OFFSET;

  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: indent }}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      ref={menuListRef}
      stickyHeaderIndices={[1]}
      keyExtractor={onKeyExtractor}
      data={menuList}
      renderItem={renderItem}
      extraData={{ categoryListData, visibleCategoryId, categoryShadow }}
      contentInset={{ bottom: indent }}
      onScroll={handleScroll}
    />
  );
};
