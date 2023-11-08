import React, { type FC } from 'react';
import { TouchableOpacity, Text, StyleSheet, type TouchableOpacityProps } from 'react-native';
import { hexToRgba } from '../../utils/hexToRgba';
import { COLORS } from '../../constants/colors';

const enum Variant {
  primary = 'primary',
  secondary = 'secondary',
}

interface Props extends TouchableOpacityProps {
  text: string;
  variant?: keyof typeof Variant;
}

export const Chip: FC<Props> = ({ text, style, variant = Variant.primary, ...props }) => {
  const getVariantStyles = (variant: keyof typeof Variant) => {
    switch (variant) {
      case Variant.primary: {
        return {
          backgroundColor: COLORS.backgroundTertiary,
        };
      }
      case Variant.secondary: {
        return {
          backgroundColor: hexToRgba(COLORS.main, 0.1),
        };
      }
    }
  };

  const getTextVariantStyles = (variant: keyof typeof Variant) => {
    switch (variant) {
      case Variant.primary: {
        return {
          color: COLORS.textSecondary,
        };
      }
      case Variant.secondary: {
        return {
          color: COLORS.main,
        };
      }
    }
  };

  return (
    <TouchableOpacity {...props} style={[styles.wrapper, getVariantStyles(variant), style]}>
      <Text style={[getTextVariantStyles(variant), styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  text: {
    fontWeight: '500',
  },
});
