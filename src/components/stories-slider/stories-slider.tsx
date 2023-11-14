import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import { MAIN_INDENT } from '../../constants/layout';

export const StoriesSlider = () => {
  return (
    <ScrollView
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      horizontal={true}
    >
      <View style={[styles.item, { marginLeft: MAIN_INDENT }]}>
        <Image style={styles.img} resizeMode="cover" source={require('./img/4.jpg')} />
      </View>
      <View style={styles.item}>
        <Image style={styles.img} resizeMode="cover" source={require('./img/1.jpg')} />
      </View>
      <View style={styles.item}>
        <Image style={styles.img} resizeMode="cover" source={require('./img/3.jpg')} />
      </View>
      <View style={styles.item}>
        <Image style={styles.img} resizeMode="cover" source={require('./img/2.jpg')} />
      </View>
      <View style={styles.item}>
        <Image style={styles.img} resizeMode="cover" source={require('./img/6.jpg')} />
      </View>
      <View style={styles.item}>
        <Image style={styles.img} resizeMode="cover" source={require('./img/4.jpg')} />
      </View>
      <View style={[styles.item, { marginRight: MAIN_INDENT }]}>
        <Image style={styles.img} resizeMode="cover" source={require('./img/5.jpg')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
