import React, { useLayoutEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { City, CityList, useGetCities } from '../../modules/place';

export const CitiesScreen = () => {
  const { data } = useGetCities();

  const navigation = useNavigation<any>(); // TODO add type

  const [searchInputValue, setSearchInputValue] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        hideWhenScrolling: false,
        cancelButtonText: 'Отмена',
        onChangeText: (event: any) => setSearchInputValue(event.nativeEvent.text),
      },
    });
  }, [navigation]);

  const filteredValues = useMemo(() => {
    if (!searchInputValue) {
      return data!;
    }

    return data!.filter((item) => item.name.includes(searchInputValue));
  }, [data, searchInputValue]);

  const handleCityChange = (city: City) => {
    navigation.push('places', { city });
  };

  return <CityList onCityChange={handleCityChange} values={filteredValues} />;
};
