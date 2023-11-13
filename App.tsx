import * as React from 'react';
import { useEffect } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { InitialNavigation } from './src/components/initial-navigation';
import { MainNavigation } from './src/components/main-navigation';
import { selectPlaceId, usePlaceStore } from './src/modules/place';
import { ReactQueryProvider } from './src/providers/react-query-provider';

export default function App() {
  const placeId = usePlaceStore(selectPlaceId);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ReactQueryProvider>
      <GestureHandlerRootView style={styles.gestureHandlerRootView}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            {!placeId ? <InitialNavigation /> : <MainNavigation />}
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ReactQueryProvider>
  );
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
});
