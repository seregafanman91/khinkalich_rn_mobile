import React, { useRef } from 'react';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon } from '../../ui/icon';
import { Modal } from '../../ui/modal';
import { COLORS } from '../../constants/colors';
import { MAIN_INDENT } from '../../constants/layout';

const SNAP_POINTS = ['100%'];

export const StoriesSlider = () => {
  const modalRef = useRef<BottomSheetModalMethods | null>(null);

  const handleSlidePress = () => {
    modalRef.current?.present();
  };

  return (
    <>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        horizontal={true}
      >
        <TouchableOpacity
          onPress={handleSlidePress}
          style={[styles.item, { marginLeft: MAIN_INDENT }]}
        >
          <Image style={styles.img} resizeMode="cover" source={require('./img/4.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSlidePress} style={styles.item}>
          <Image style={styles.img} resizeMode="cover" source={require('./img/1.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSlidePress} style={styles.item}>
          <Image style={styles.img} resizeMode="cover" source={require('./img/3.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSlidePress} style={styles.item}>
          <Image style={styles.img} resizeMode="cover" source={require('./img/2.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSlidePress} style={styles.item}>
          <Image style={styles.img} resizeMode="cover" source={require('./img/6.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSlidePress} style={styles.item}>
          <Image style={styles.img} resizeMode="cover" source={require('./img/4.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSlidePress}
          style={[styles.item, { marginRight: MAIN_INDENT }]}
        >
          <Image style={styles.img} resizeMode="cover" source={require('./img/5.jpg')} />
        </TouchableOpacity>
      </ScrollView>
      <Modal
        backgroundComponent={() => (
          <View
            style={{
              backgroundColor: COLORS.backgroundPrimaryInvert,
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
          />
        )}
        ref={modalRef}
        snapPoints={SNAP_POINTS}
      >
        <View style={styles.modalView}>
          <View style={styles.header}>
            <SafeAreaView style={{ position: 'relative' }}>
              <TouchableOpacity onPress={() => modalRef.current?.close()} style={styles.closeBtn}>
                <Icon style={styles.closeIcon} name="close" />
              </TouchableOpacity>
            </SafeAreaView>
          </View>
          <Image
            style={styles.modalImg}
            resizeMode="contain"
            source={require('./img/story-min.png')}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 999,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  closeBtn: {
    backgroundColor: COLORS.backgroundPrimary,
    width: 30,
    height: 30,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: MAIN_INDENT,
    marginTop: 10,
  },
  closeIcon: {
    color: COLORS.textSecondary,
  },
  modalView: {
    flex: 1,
  },
  modalImg: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    marginBottom: 20,
  },
  item: {
    borderWidth: 2,
    borderColor: COLORS.main,
    borderRadius: 10,
  },
  contentContainerStyle: {
    gap: 10,
  },
  img: {
    borderRadius: 10,
    width: 80,
    height: 100,
    borderWidth: 2,
    borderColor: COLORS.backgroundPrimary,
  },
});
