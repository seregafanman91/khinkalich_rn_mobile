import React, { type FC } from 'react';
import { Image, StyleSheet, Text, View, type ViewStyle } from 'react-native';
import { Container } from '../../../components/container';
import { Counter } from '../../../ui/counter';
import { COLORS } from '../../../constants/colors';
import { getFormatPrice } from '../../../utils/getFormatPrice';
import { type Product } from '../types/product';

interface Props {
  data: Product;
  count: number;
  onCountChange: (id: string, nextValue: number) => void;
  hasBorder?: boolean;
  style?: ViewStyle;
}

export const ProductCardSmall: FC<Props> = ({ data, onCountChange, count, hasBorder, style }) => {
  const { img, id, price, name, weight } = data;

  const handleCountChange = (nextValue: number) => {
    onCountChange(id, nextValue);
  };

  return (
    <View style={[styles.wrapper, { borderBottomWidth: hasBorder ? 1 : 0 }, style]}>
      <Container>
        <View style={styles.top}>
          <Image style={styles.img} resizeMode="contain" source={img} />
          <View style={styles.rightContent}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{weight}</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.price}>{getFormatPrice(price)}</Text>
          <Counter value={count} onChange={handleCountChange} />
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    borderBottomColor: COLORS.border,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  rightContent: {
    width: '75%',
  },
  img: {
    width: null,
    height: 100,
    flex: 1,
    flexGrow: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  description: {
    fontSize: 12,
    marginTop: 4,
    color: COLORS.textSecondary,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'center',
  },
});
