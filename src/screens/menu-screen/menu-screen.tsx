import React, { useCallback } from 'react';
import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchButton } from '../../components/search-button';
import { KhinIcon } from '../../ui/custom-icons/KhinIcon';
import { CityButton } from '../../modules/app';
import { selectCartInc, useCartStore } from '../../modules/cart';
import { Product, ProductPreviewCard, useGetProducts } from '../../modules/product';
import { COLORS } from '../../constants/colors';
import { MAIN_INDENT } from '../../constants/layout';

const onKeyExtractor = (item: Product) => item.id;

export const MenuScreen = () => {
  const { data } = useGetProducts();
  const incCart = useCartStore(selectCartInc);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Product>) => {
      return <ProductPreviewCard onBuyPress={incCart} data={item} />;
    },
    [incCart]
  );

  return (
    <View style={styles.wrapper}>
      <FlatList keyExtractor={onKeyExtractor} data={data} renderItem={renderItem} />
    </View>
  );
};

export const getMenuScreenOptions = () => ({
  headerTitle: '',
  headerLeft: () => <CityButton onPress={() => {}} style={styles.headerLeft} />,
  headerRight: () => <SearchButton style={styles.headerRight} />,
  tabBarIcon: ({ color }: { color: string }) => <KhinIcon color={color} />,
  headerStyle: {
    shadowColor: 'transparent',
  },
  tabBarActiveTintColor: COLORS.main,
});

const styles = StyleSheet.create({
  productList: {},
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
  },
  headerLeft: {
    marginLeft: MAIN_INDENT,
  },
  headerRight: {
    marginRight: MAIN_INDENT,
  },
});
