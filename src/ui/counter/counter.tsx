import React, { type FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import { haptic } from '../../utils/haptic';
import { Icon } from '../icon';

const enum Size {
  md = 'md',
  sm = 'sm',
}

interface Props {
  value: number;
  onChange: (nextValue: number) => void;
  size?: keyof typeof Size;
}

export const Counter: FC<Props> = ({ value = 1, onChange, size = Size.sm }) => {
  const runLightHaptics = () => {
    haptic('impactLight');
  };

  const handleDec = () => {
    runLightHaptics();
    onChange(value - 1);
  };

  const handleInc = () => {
    runLightHaptics();
    onChange(value + 1);
  };

  return (
    <Text>
      <View style={[styles.wrapper, styles.wrapper[size]]}>
        <TouchableOpacity style={[styles.button, styles.button[size]]} onPress={handleDec}>
          <Icon name="remove" size={size} />
        </TouchableOpacity>
        <Text style={styles.text}>{value}</Text>
        <TouchableOpacity style={styles.button} onPress={handleInc}>
          <Icon name="add" size={size} />
        </TouchableOpacity>
      </View>
    </Text>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundTertiary,
    borderRadius: 30,

    sm: {
      gap: 5,
      paddingVertical: 0,
      paddingHorizontal: 10,
    },

    md: {
      gap: 10,
      paddingVertical: 4,
      paddingHorizontal: 15,
    },
  },
  text: {
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: '500',
    width: 30,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 5,

    sm: {
      paddingVertical: 0,
      paddingHorizontal: 4,
    },

    md: {
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
  },
});
