import * as React from 'react';
import { useEffect } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { CartScreen, getCartScreenOptions } from './src/screens/cart-screen';
import { MenuScreen, getMenuScreenOptions } from './src/screens/menu-screen';
import { Icon } from './src/ui/icon';
import { selectPlace, usePlaceStore } from './src/modules/app';
import { selectCartCount, useCartStore } from './src/modules/cart';
import { COLORS } from './src/constants/colors';
import { ReactQueryProvider } from './src/providers/react-query-provider';

const Tab = createBottomTabNavigator();

export default function App() {
  const cartCount = useCartStore(selectCartCount);
  const place = usePlaceStore(selectPlace);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const getMainRoutes = () => {
    return (
      <GestureHandlerRootView style={styles.gestureHandlerRootView}>
        <ReactQueryProvider>
          <BottomSheetModalProvider>
            <Tab.Navigator>
              <Tab.Screen options={getMenuScreenOptions()} name="Menu" component={MenuScreen} />
              <Tab.Screen
                options={{
                  tabBarIcon: ({ color }) => <Icon color={color} size="lg" name="face" />,
                  tabBarActiveTintColor: COLORS.main,
                }}
                name="Профиль"
                component={MenuScreen}
              />
              <Tab.Screen
                options={{
                  tabBarIcon: ({ color }) => <Icon color={color} size="lg" name="room" />,
                  tabBarActiveTintColor: COLORS.main,
                }}
                name="Контакты"
                component={MenuScreen}
              />
              <Tab.Screen
                options={getCartScreenOptions(cartCount)}
                name="Корзина"
                component={CartScreen}
              />
            </Tab.Navigator>
          </BottomSheetModalProvider>
        </ReactQueryProvider>
      </GestureHandlerRootView>
    );
  };

  const getInitialRoutes = () => {
    return <Text>TEST</Text>;
  };

  return <NavigationContainer>{place ? getInitialRoutes() : getMainRoutes()}</NavigationContainer>;
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
});
