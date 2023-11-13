import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import { CartScreenList } from './cart-screen-list';

export const CartScreen = () => {
  return (
    <View style={styles.wrapper}>
      <CartScreenList />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
  },
});
