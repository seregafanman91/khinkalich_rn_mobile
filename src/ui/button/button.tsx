import React, { type FC } from 'react';
import { StyleSheet, Text, TouchableHighlight, type TouchableHighlightProps } from 'react-native';
import { COLORS } from '../../constants/colors';
import { hexToRgba } from '../../utils/hexToRgba';

interface Props extends TouchableHighlightProps {
  text: string;
}

const underlayColor = hexToRgba(COLORS.main, 0.6);

export const Button: FC<Props> = ({ text, ...props }) => {
  return (
    <TouchableHighlight {...props} underlayColor={underlayColor} style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.main,
    fontSize: 40,
    borderRadius: 40,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textInvert,
    textAlign: 'center',
  },
});
