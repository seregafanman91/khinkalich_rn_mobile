import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { CartScreen } from '../../screens/cart-screen';
import { KhinIcon } from '../../ui/custom-icons/KhinIcon';
import { Icon } from '../../ui/icon';
import { selectCartCount, useCartStore } from '../../modules/cart';
import { COLORS } from '../../constants/colors';
import { MenuNavigation } from '../menu-navigation';

const Tab = createBottomTabNavigator();

export const MainNavigation = () => {
  const cartCount = useCartStore(selectCartCount);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => (
          <BlurView
            blurType="xlight"
            style={styles.blur}
            blurAmount={30}
            reducedTransparencyFallbackColor="white"
          />
        ),
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: { color: string }) => <KhinIcon color={color} />,
          tabBarActiveTintColor: COLORS.main,
          title: 'Меню',
        }}
        name="menu"
        component={MenuNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Icon color={color} size="lg" name="face" />,
          tabBarActiveTintColor: COLORS.main,
          title: 'Профиль',
        }}
        name="profile"
        component={MenuNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Icon color={color} size="lg" name="room" />,
          tabBarActiveTintColor: COLORS.main,
          title: 'Контакты',
        }}
        name="contacts"
        component={MenuNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Icon color={color} size="lg" name="shopping-cart" />,
          tabBarActiveTintColor: COLORS.main,
          tabBarBadge: cartCount > 0 ? cartCount : undefined,
          tabBarBadgeStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
        }}
        name="Корзина"
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  blur: {
    flex: 1,
  },
});
