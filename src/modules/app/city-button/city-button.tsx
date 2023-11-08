import React, { type FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, type ViewStyle } from 'react-native';
import { Icon } from '../../../ui/icon';
import { COLORS } from '../../../constants/colors';

interface Props {
  style: ViewStyle;
  onPress: () => void;
}

export const CityButton: FC<Props> = ({ style: outerStyle, onPress }) => {
  return (
    <View style={outerStyle}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Лобня</Text>
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
