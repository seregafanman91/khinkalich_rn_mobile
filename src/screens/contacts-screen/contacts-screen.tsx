import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from '../../components/container';
import { NavButton } from '../../components/nav-button';
import { Button } from '../../ui/button';
import { Insta } from '../../ui/custom-icons/Insta';
import { Vk } from '../../ui/custom-icons/Vk';
import { COLORS } from '../../constants/colors';

export const ContactsScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Container>
        <View style={styles.mapWrapper}>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('./img/navigation-pana-min.png')}
          />
          <View style={styles.mapWrapperBtn}>
            <Button onPress={() => {}} style={styles.mapBtn} text="Хинкальные на карте" />
          </View>
        </View>
        <Text style={styles.title}>Связться с поддержкой</Text>
        <View style={styles.supportView}>
          <Button
            onPress={() => {}}
            variant="secondary"
            style={styles.supportBtn}
            text="Позвонить"
          />
          <Button
            onPress={() => {}}
            variant="secondary"
            style={styles.supportBtn}
            text="Написать в чат"
          />
        </View>
        <View style={styles.socialNetworks}>
          <TouchableOpacity>
            <Vk color={COLORS.main} width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Insta color={COLORS.main} width={40} height={40} />
          </TouchableOpacity>
        </View>
        <NavButton text="Правовые документы" />
        <NavButton text="О приложении" />
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  socialNetworks: {
    borderTopColor: COLORS.border,
    borderTopWidth: 1,
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mapWrapperBtn: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
  },
  supportView: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
    marginBottom: 40,
  },
  supportBtn: {
    width: '50%',
  },
  mapBtn: {
    width: 300,
    marginVertical: 0,
    marginHorizontal: 'auto',
  },
  img: {
    width: null,
    height: 220,
  },
  mapWrapper: {
    paddingVertical: 30,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
  },
});
