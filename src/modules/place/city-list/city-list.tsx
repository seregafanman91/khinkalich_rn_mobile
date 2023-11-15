import React, { type FC, useCallback } from 'react';
import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { NavButton } from '../../../components/nav-button';
import { COLORS } from '../../../constants/colors';
import { MAIN_INDENT } from '../../../constants/layout';
import { City } from '../types/city';

interface Props {
  onCityChange: (item: City) => void;
  values: City[];
}

export const CityList: FC<Props> = ({ onCityChange, values }) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<City>) => {
      return (
        <NavButton text={item.name} onPress={() => onCityChange(item)} style={styles.navButton} />
      );
    },
    [onCityChange]
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList data={values} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
  },
  navButton: {
    marginLeft: MAIN_INDENT,
    paddingRight: MAIN_INDENT,
  },
});
