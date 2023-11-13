import React, { FC, Ref } from 'react';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container } from '../../../components/container';
import { Button } from '../../../ui/button';
import { Icon } from '../../../ui/icon';
import { Modal } from '../../../ui/modal';
import { COLORS } from '../../../constants/colors';
import { Place } from '../types/place';

type Props = {
  bottomSheetModalRef?: Ref<BottomSheetModalMethods>;
  onPlaceSelect: (place: Place) => void;
  place: Place;
  onCloseRequest: () => void;
};

const SNAP_POINTS = [250];

export const PlaceInfo: FC<Props> = ({
  bottomSheetModalRef,
  place,
  onPlaceSelect,
  onCloseRequest,
}) => {
  const insets = useSafeAreaInsets();

  const handlePhonePress = () => {
    Linking.openURL('tel:+79269202252');
  };

  return (
    <Modal
      footerComponent={() => (
        <Container style={{ marginBottom: insets.bottom }}>
          <Button onPress={() => onPlaceSelect(place)} text="Выбрать" />
        </Container>
      )}
      ref={bottomSheetModalRef}
      snapPoints={SNAP_POINTS}
    >
      <ScrollView>
        <Container style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Старик Хинкалыч Лобня</Text>
            <TouchableOpacity onPress={onCloseRequest}>
              <Icon style={styles.icon} name="close" />
            </TouchableOpacity>
          </View>
          <View style={styles.mainInfo}>
            <View>
              <Text style={styles.workTime}>С 10:00 до 23:00</Text>
              <Text style={styles.address}>ул. Ленина, 18</Text>
            </View>
            <Text>1.4 км</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoBlockTitle}>Телефон:</Text>
            <View>
              <TouchableOpacity onPress={handlePhonePress}>
                <Text style={styles.phone}>+7 (926) 920-22-52</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  infoBlockListItem: {
    fontSize: 12,
    textAlign: 'right',
  },
  phone: {
    textAlign: 'right',
    paddingVertical: 2,
    color: COLORS.main,
    fontWeight: '500',
  },
  infoBlockTitle: {
    fontWeight: '500',
  },
  infoBlock: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    color: COLORS.main,
  },
  address: {
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  mainInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 10,
  },
  workTime: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.main,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
