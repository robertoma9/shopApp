import React from 'react';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

interface DrawerIconProps {
  color: string;
  size: number;
  focused: boolean;
}

export const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },

  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

export const drawerNavigationOptions = {
  activeTintColor: Colors.primary,
};

//  (drawerConfig: <tipo-de-prop>) : <tipo-de-retorno> -> ex: React.Node (Elemento JSX)
export const productsDrawerIcon = (
  drawerConfig: DrawerIconProps,
): React.ReactNode => (
  <Ionicons
    name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
    size={23}
    color={drawerConfig.color}
  />
);

export const ordersDrawerIcon = (
  drawerConfig: DrawerIconProps,
): React.ReactNode => (
  <Ionicons
    name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
    size={23}
    color={drawerConfig.color}
  />
);

export const adminDrawerIcon = (
  drawerConfig: DrawerIconProps,
): React.ReactNode => (
  <Ionicons
    name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
    size={23}
    color={drawerConfig.color}
  />
);
