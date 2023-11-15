import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SearchButton } from '../../components/search-button';
import { CityButton } from '../../modules/place';
import { COLORS } from '../../constants/colors';
import { MAIN_INDENT } from '../../constants/layout';
import { useCurrentCity } from '../../hooks/useCurrentCity';
import { MenuProductList } from './menu-product-list';

export const MenuScreen = () => {
  const navigator = useNavigation<any>();
  const currentCity = useCurrentCity();

  const handleCityButtonPress = useCallback(() => {
    navigator.push('edit-place');
  }, [navigator]);

  return (
    <View style={styles.wrapper}>
      <SafeAreaView>
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
      </SafeAreaView>
      <MenuProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
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
