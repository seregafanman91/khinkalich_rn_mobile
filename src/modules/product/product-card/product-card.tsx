import React, { type FC, useEffect, useRef, useState } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Container } from '../../../components/container';
import { Button } from '../../../ui/button';
import { Counter } from '../../../ui/counter';
import { DownButton } from '../../../ui/down-button';
import { COLORS } from '../../../constants/colors';
import { MAIN_INDENT } from '../../../constants/layout';
import { getFormatPrice } from '../../../utils/getFormatPrice';
import { haptic } from '../../../utils/haptic';
import { type Product } from '../types/product';

interface Props {
  data: Product;
  onClosed: () => void;
  onBuyPress: (id: string, count: number) => void;
  count?: number;
}

const INITIAL_COUNT = 1;
const SNAP_POINTS = ['100%'];

export const ProductCard: FC<Props> = ({
  onClosed,
  onBuyPress,
  count: outerCount = 1,
  data: { name, description, price, weight, img, id },
}) => {
  const [count, setCount] = useState(outerCount ?? INITIAL_COUNT);

  const modalRef = useRef<BottomSheetModalMethods | null>(null);

  useEffect(() => {
    modalRef.current?.present();
  }, []);

  const handleCounterChange = (nextCount: number) => {
    setCount(Math.max(INITIAL_COUNT, nextCount));
  };

  const handleBuyPress = () => {
    haptic('impactHeavy');
    onBuyPress(id, count);
    onClosed();
  };

  const handleBottomSheetModalChange = (index: number) => {
    if (index !== -1) {
      return;
    }

    onClosed();
  };

  const totalPrice = price * count;

  return (
    <BottomSheetModal
      footerComponent={() => (
        <Container style={styles.footerContainer}>
          <Button onPress={handleBuyPress} text={`Купить за ${getFormatPrice(totalPrice)}`} />
        </Container>
      )}
      ref={modalRef}
      snapPoints={SNAP_POINTS}
      onChange={handleBottomSheetModalChange}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Container style={styles.wrapper}>
          <DownButton onPress={onClosed} style={styles.downButton} />
          <Image resizeMode="contain" style={styles.img} source={img} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.counterWrapper}>
            <Text style={styles.weight}>{weight}</Text>
            <Counter size="md" value={count} onChange={handleCounterChange} />
          </View>
        </Container>
      </SafeAreaView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: 16,
  },
  downButton: {
    position: 'absolute',
    zIndex: 9,
    left: MAIN_INDENT,
  },
  modalStyle: {
    minHeight: '100%',
  },
  img: {
    height: 400,
    width: null,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.textSecondary,
    marginBottom: 5,
  },
  footerContainer: {
    paddingBottom: 46,
    paddingTop: 16,
  },
  weight: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  counterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
