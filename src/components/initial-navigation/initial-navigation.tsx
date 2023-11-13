import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CitiesScreen } from '../../screens/cities-screen';
import { PlacesScreen } from '../../screens/places-screen';

const Stack = createNativeStackNavigator();

export const InitialNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cities"
        options={{
          title: 'Выберите город',
        }}
        component={CitiesScreen}
      />
      <Stack.Screen
        name="places"
        options={{
          title: '',
          headerBackTitle: 'Назад',
        }}
        component={PlacesScreen}
      />
    </Stack.Navigator>
  );
};
