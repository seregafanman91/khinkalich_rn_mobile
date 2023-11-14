import React, { useCallback, useRef } from 'react';
import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { SearchButton } from '../../components/search-button';
import { StoriesSlider } from '../../components/stories-slider';
import { selectCartInc, useCartStore } from '../../modules/cart';
import { CategoryList, useCategoryList } from '../../modules/category';
import { CityButton } from '../../modules/place';
import { ProductPreviewCard } from '../../modules/product';
import { COLORS } from '../../constants/colors';
import { MAIN_INDENT } from '../../constants/layout';
import { useCurrentCity } from '../../hooks/useCurrentCity';
import { MainListItem, useMainList } from './hooks/useMainList';

const onKeyExtractor = (item: MainListItem) => item.id;

export const MenuScreen = () => {
  const navigator = useNavigation<any>();
  const incCart = useCartStore(selectCartInc);
  const currentCity = useCurrentCity();
  const categoryListData = useCategoryList();

  const mainListRef = useRef<FlatList | null>(null);
  const mainList = useMainList();

  const renderItem = ({ item, index }: ListRenderItemInfo<MainListItem>) => {
    if (index === 0) {
      return <StoriesSlider />;
    } else if (index === 1) {
      return (
        <CategoryList data={categoryListData} visibleCategoryId={null} onItemPress={() => {}} />
      );
    }

    return <ProductPreviewCard onBuyPress={incCart} data={item} />;
  };

  const handleCityButtonPress = useCallback(() => {
    navigator.push('edit-place');
  }, [navigator]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        {currentCity && (
          <CityButton
            city={currentCity}
            onPress={handleCityButtonPress}
            style={styles.headerLeft}
          />
        )}
        <SearchButton style={styles.headerRight} />
      </View>
      <FlatList
        ref={mainListRef}
        stickyHeaderIndices={[1]}
        keyExtractor={onKeyExtractor}
        data={mainList}
        renderItem={renderItem}
        extraData={{
          mainList,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  headerLeft: {
    marginLeft: MAIN_INDENT,
  },
  headerRight: {
    marginRight: MAIN_INDENT,
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
  },
});
