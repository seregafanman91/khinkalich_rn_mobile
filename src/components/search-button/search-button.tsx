import React, { type FC } from 'react';
import { TouchableOpacity, type ViewStyle, StyleSheet } from 'react-native';
import { Icon } from '../../ui/icon';
import { COLORS } from '../../constants/colors';

interface Props {
  style: ViewStyle;
}

export const SearchButton: FC<Props> = ({ style: outerStyle }) => {
  return (
    <TouchableOpacity style={outerStyle}>
      <Icon style={styles.wrapper} name="search" />
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  wrapper: {
    color: COLORS.textPrimary,
  },
});
