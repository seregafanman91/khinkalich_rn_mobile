import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuScreen } from '../../screens/menu-screen';
import { InitialNavigation } from '../initial-navigation';

const Stack = createNativeStackNavigator();

export const MenuNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="menu-list"
        options={{
          headerShown: false,
        }}
        component={MenuScreen}
      />
      <Stack.Screen
        name="edit-place"
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
        component={InitialNavigation}
      />
    </Stack.Navigator>
  );
};
