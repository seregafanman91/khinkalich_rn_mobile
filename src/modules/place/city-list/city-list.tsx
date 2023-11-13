import React, { type FC, useCallback } from 'react';
import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from '../../../ui/icon';
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
        <TouchableOpacity style={styles.button} onPress={() => onCityChange(item)}>
          <Text style={styles.text} key={item.id}>
            {item.name}
          </Text>
          <Icon style={styles.icon} name="navigate-next" />
        </TouchableOpacity>
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
  button: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    marginLeft: MAIN_INDENT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: MAIN_INDENT,
  },
  text: {
    fontSize: 14,
  },
  icon: {
    color: COLORS.textSecondary,
  },
});
