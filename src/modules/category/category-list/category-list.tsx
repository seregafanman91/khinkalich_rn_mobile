import React, { type FC, useEffect, useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Chip } from '../../../ui/chip';
import { COLORS } from '../../../constants/colors';
import { MAIN_INDENT } from '../../../constants/layout';

export interface Data {
  categoryName: string;
  categoryId: string;
}

interface Props {
  data: Data[];
  visibleCategoryId: string | null;
  onItemPress: (nextVisibleCategoryId: string) => void;
}

const DEFAULT_MARGIN = 10;

export const CategoryList: FC<Props> = ({ data, visibleCategoryId, onItemPress }) => {
  const ref = useRef<FlatList | null>(null);

  const scrollToFirstCategoryId = (categoryId: string) => {
    const index = data.findIndex((item) => item.categoryId === categoryId);

    ref.current?.scrollToIndex({ index, viewPosition: 0.5 });
  };

  useEffect(() => {
    if (!visibleCategoryId) {
      return;
    }

    scrollToFirstCategoryId(visibleCategoryId);
  }, [data, visibleCategoryId]);

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
    <View style={styles.wrapper}>
      <FlatList
        ref={ref}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        renderItem={({ item, index }) => (
          <Chip
            onPress={() => {
              scrollToFirstCategoryId(item.categoryId);
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
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 8,
    backgroundColor: COLORS.backgroundPrimary,
    zIndex: 999,
  },
});
