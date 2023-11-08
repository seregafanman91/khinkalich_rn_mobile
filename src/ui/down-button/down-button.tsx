import React, { type FC } from 'react';
import {
  StyleSheet,
  Text,
  type TextStyle,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';
import { COLORS } from '../../constants/colors';
import { Icon } from '../icon';

interface Props extends TouchableOpacityProps {
  style?: TextStyle;
}

export const DownButton: FC<Props> = ({ style, ...props }) => {
  return (
    <Text style={style}>
      <TouchableOpacity {...props} style={styles.wrapper}>
        <Icon name="keyboard-arrow-down" size="xl" />
      </TouchableOpacity>
    </Text>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    backgroundColor: COLORS.backgroundPrimary,
    padding: 8,
  },
});
