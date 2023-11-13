import React, { type FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, type ViewStyle } from 'react-native';
import { Icon } from '../../../ui/icon';
import { COLORS } from '../../../constants/colors';
import { City } from '../types/city';

interface Props {
  style: ViewStyle;
  city: City;
  onPress: () => void;
}

export const CityButton: FC<Props> = ({ style: outerStyle, onPress, city }) => {
  return (
    <View style={outerStyle}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>{city.name}</Text>
        <Icon name="expand-more" size="md" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: COLORS.textPrimary,
  },
});
