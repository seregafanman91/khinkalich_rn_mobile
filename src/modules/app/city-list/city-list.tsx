import React, { type FC } from 'react';
import { Button, Text, View } from 'react-native';

interface Props {
  onPress: () => void;
}

export const CityList: FC<Props> = ({ onPress }) => {
  return (
    <View>
      <Text>12321</Text>
      <Text>12321</Text>
      <Button title="Go to places" onPress={onPress} />
    </View>
  );
};
