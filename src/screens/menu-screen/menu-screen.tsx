import React, { useCallback } from 'react';
import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { SearchButton } from '../../components/search-button';
import { selectCartInc, useCartStore } from '../../modules/cart';
import { CityButton } from '../../modules/place';
import { Product, ProductPreviewCard, useGetProducts } from '../../modules/product';
import { COLORS } from '../../constants/colors';
import { MAIN_INDENT } from '../../constants/layout';
import { useCurrentCity } from '../../hooks/useCurrentCity';

const onKeyExtractor = (item: Product) => item.id;

export const MenuScreen = () => {
  const navigator = useNavigation<any>();
  const incCart = useCartStore(selectCartInc);
  const currentCity = useCurrentCity();

  const { data } = useGetProducts();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Product>) => {
      return <ProductPreviewCard onBuyPress={incCart} data={item} />;
    },
    [incCart]
  );

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
      <FlatList keyExtractor={onKeyExtractor} data={data} renderItem={renderItem} />
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
