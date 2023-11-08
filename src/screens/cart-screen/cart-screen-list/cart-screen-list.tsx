import React, { useMemo } from 'react';
import { BlurView } from '@react-native-community/blur';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Container } from '../../../components/container';
import { Button } from '../../../ui/button';
import { selectCartChange, useCartStore } from '../../../modules/cart';
import { ProductCardSmall } from '../../../modules/product';
import { COLORS } from '../../../constants/colors';
import { getFormatPrice } from '../../../utils/getFormatPrice';
import { getLastDigit } from '../../../utils/getLastDigit';
import { hexToRgba } from '../../../utils/hexToRgba';
import { useCartProducts } from '../hooks/useCartProducts';

export const CartScreenList = () => {
  const changeCart = useCartStore(selectCartChange);
  const data = useCartProducts();

  const totalSum = useMemo(() => {
    return data.reduce((acc, cur) => acc + cur.count * cur.data.price, 0);
  }, [data]);

  const displayTotalSum = getFormatPrice(totalSum);

  const getCountOfProductsAndSum = () => {
    const len = data.length;
    const lastDigit = getLastDigit(len);

    if (lastDigit === 1) {
      return `${len} товар на ${displayTotalSum}`;
    } else if (lastDigit > 4) {
      return `${len} товаров на ${displayTotalSum}`;
    } else {
      return `${len} товара на ${displayTotalSum}`;
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Container style={styles.header}>
          <Text style={styles.headerText}>{getCountOfProductsAndSum()}</Text>
        </Container>
        {data.map(({ data, count }, index, arr) => {
          const isLast = index === arr.length - 1;

          return (
            <ProductCardSmall
              style={isLast ? styles.lastCart : undefined}
              hasBorder={!isLast}
              key={data.id}
              data={data}
              count={count}
              onCountChange={changeCart}
            />
          );
        })}
      </ScrollView>
      <BlurView
        blurType="light"
        blurAmount={10}
        style={styles.buttonContainer}
        reducedTransparencyFallbackColor="white"
      >
        <Container>
          <Button text={`Оформить заказ на ${displayTotalSum}`} />
        </Container>
      </BlurView>
    </View>
  );
};

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  wrapper: {
    flex: 1,
  },
  lastCart: {
    marginBottom: 86,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flex: 1,
    backgroundColor: hexToRgba(COLORS.backgroundSecondary, 0.6),
  },
});
