import React, { FC } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import { City, Place, PlacesMap, selectSetPlace, usePlaceStore } from '../../modules/place';

type RouteParams = {
  city: City;
};

type Props = NativeStackScreenProps<RouteParams>;

export const PlacesScreen: FC<Props> = ({ route, navigation }) => {
  const { city } = route.params as RouteParams;
  const setPlace = usePlaceStore(selectSetPlace);
  const parentNavigation = navigation.getParent();

  const handlePlaceSelect = (place: Place) => {
    setPlace(city.id, place.id);

    if (parentNavigation) {
      parentNavigation.navigate('menu-list');
    }
  };

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.wrapper}>
        <PlacesMap city={city} style={styles.map} onPlaceSelect={handlePlaceSelect} />
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
