import React, { forwardRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Chip } from '../../../ui/chip';
import { COLORS } from '../../../constants/colors';
import { MAIN_INDENT } from '../../../constants/layout';

export interface Data {
  categoryName: string;
  categoryId: string;
}

interface Props {
  shadow?: boolean;
  data: Data[];
  visibleCategoryId: string | null;
  onItemPress: (nextVisibleCategoryId: string) => void;
}

const DEFAULT_MARGIN = 10;

export const CategoryList = forwardRef<FlatList, Props>(
  ({ data, visibleCategoryId, onItemPress, shadow = false }, forwardedRef) => {
    const getMargin = (index: number) => {
      if (index === 0) {
        return {
          marginLeft: MAIN_INDENT,
          marginRight: DEFAULT_MARGIN,
        };
      } else if (index === data.length - 1) {
        return {
          marginRight: MAIN_INDENT,
        };
      }

      return {
        marginRight: DEFAULT_MARGIN,
      };
    };

    return (
      <View style={[styles.wrapper, shadow ? styles.wrapper.shadow : undefined]}>
        <FlatList
          ref={forwardedRef}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={({ item, index }) => (
            <Chip
              onPress={() => {
                onItemPress(item.categoryId);
              }}
              variant={visibleCategoryId === item.categoryId ? 'secondary' : 'primary'}
              text={item.categoryName}
              style={[getMargin(index)]}
            />
          )}
          keyExtractor={(item) => item.categoryId}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 8,
    backgroundColor: COLORS.backgroundPrimary,
    zIndex: 999,

    shadow: {
      shadowOffset: { width: -1, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
    },
  },
});
