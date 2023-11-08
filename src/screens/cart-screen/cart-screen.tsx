import React from 'react';
import { type BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { Icon } from '../../ui/icon';
import { COLORS } from '../../constants/colors';
import { CartScreenList } from './cart-screen-list';

export const CartScreen = () => {
  return (
    <View style={styles.wrapper}>
      <CartScreenList />
    </View>
  );
};

export const getCartScreenOptions = (totalInCart: number): BottomTabNavigationOptions => ({
  tabBarIcon: ({ color }) => <Icon color={color} size="lg" name="shopping-cart" />,
  tabBarActiveTintColor: COLORS.main,
  tabBarBadge: totalInCart > 0 ? totalInCart : undefined,
  tabBarBadgeStyle: {
    fontSize: 12,
    fontWeight: '500',
  },
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
  },
});
