import React, { type FC, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  Pressable,
  type StyleProp,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
} from 'react-native';
import { Container } from '../../../components/container';
import { Chip } from '../../../ui/chip';
import { COLORS } from '../../../constants/colors';
import { getFormatPrice } from '../../../utils/getFormatPrice';
import { haptic } from '../../../utils/haptic';
import { ProductCard } from '../product-card';
import { type Product } from '../types/product';

interface Props {
  data: Product;
  onBuyPress: (id: string, count: number) => void;
  style?: StyleProp<ViewStyle>;
}

export const ProductPreviewCard: FC<Props> = ({ data, style, onBuyPress }) => {
  const { name, price, description, img } = data;

  const [isProductModalShown, setIsProductModalShown] = useState(false);

  const scaleRef = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scaleRef, {
      toValue: 0.9,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scaleRef, {
      toValue: 1,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const handleItemPress = () => {
    setIsProductModalShown(true);
  };

  const handleProductCardClosed = () => {
    setIsProductModalShown(false);
  };

  const handleFastBuyPress = () => {
    haptic('impactHeavy');
    onBuyPress(data.id, 1);
  };

  return (
    <Container style={[styles.wrapper, style]}>
      <Animated.View style={[{ transform: [{ scale: scaleRef }] }]}>
        <Pressable
          onPress={handleItemPress}
          onPressOut={onPressOut}
          onPressIn={onPressIn}
          style={styles.pressItem}
        >
          <Image resizeMode="contain" style={styles.img} source={img} />
          <View style={styles.rightContent}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text>
              <Chip onPress={handleFastBuyPress} variant="secondary" text={getFormatPrice(price)} />
            </Text>
          </View>
        </Pressable>
      </Animated.View>
      {isProductModalShown && (
        <ProductCard onBuyPress={onBuyPress} data={data} onClosed={handleProductCardClosed} />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
  },
  pressItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rightContent: {
    width: '60%',
    gap: 10,
  },
  img: {
    height: 150,
    width: null,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  description: {
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.textSecondary,
    marginBottom: 5,
  },
});
