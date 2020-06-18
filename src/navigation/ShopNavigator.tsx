import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import {
  defaultNavOptions,
  drawerNavigationOptions,
  productsDrawerIcon,
  ordersDrawerIcon,
  adminDrawerIcon,
} from './NavigationOptions';

import {
  ProductsNavigatorParams,
  OrdersNavigatorParams,
  AdminNavigatorParams,
  ShopParams,
} from './NavigationParams';

// Navegadores
const ProductsNavigator = createStackNavigator<ProductsNavigatorParams>();
const OrdersNavigator = createStackNavigator<OrdersNavigatorParams>();
const AdminNavigator = createStackNavigator<AdminNavigatorParams>();
const ShopNavigator = createDrawerNavigator<ShopParams>();

export const ShopRoutes = ({}) => {
  //Drawer onde cada screen é uma stack (ProductsNavigator/OrdersNavigator/AdminNavigator)
  return (
    <NavigationContainer>
      <ShopNavigator.Navigator
        drawerContentOptions={drawerNavigationOptions}
        initialRouteName="Products">
        <ShopNavigator.Screen
          name="Products"
          options={{
            drawerIcon: productsDrawerIcon,
          }}
          component={ProductsRoutes}
        />
        <ShopNavigator.Screen
          name="Orders"
          options={{
            drawerIcon: ordersDrawerIcon,
          }}
          component={OrdersRoutes}
        />
        <ShopNavigator.Screen
          name="Admin"
          options={{
            drawerIcon: adminDrawerIcon,
          }}
          component={AdminRoutes}
        />
      </ShopNavigator.Navigator>
    </NavigationContainer>
  );
};

export const ProductsRoutes: React.FC = () => {
  //Stack de produdos com duas telas (ProductsOverview/ProductDetail)
  return (
    <ProductsNavigator.Navigator
      screenOptions={{ ...defaultNavOptions }}
      initialRouteName="ProductsOverview">
      <ProductsNavigator.Screen
        name="ProductsOverview"
        options={{ title: 'Products Overview' }}
        component={ProductsOverviewScreen}
      />
      <ProductsNavigator.Screen
        name="ProductDetail"
        // options={{ title: 'Product Details' }}
        component={ProductDetailScreen}
      />
      <ProductsNavigator.Screen
        name="Cart"
        options={{ title: 'Your Cart' }}
        component={CartScreen}
      />
    </ProductsNavigator.Navigator>
  );
};

export const OrdersRoutes: React.FC = ({}) => {
  //Stack de pedidos com uma tela (Orders)
  return (
    <OrdersNavigator.Navigator
      screenOptions={{ ...defaultNavOptions }}
      initialRouteName="Orders">
      <OrdersNavigator.Screen
        name="Orders"
        options={{ title: 'Your Orders' }}
        component={OrdersScreen}
      />
    </OrdersNavigator.Navigator>
  );
};

export const AdminRoutes = ({}) => {
  //Stack do usuário com duas telas (UserProducts/EditProduct)
  return (
    <AdminNavigator.Navigator
      screenOptions={{ ...defaultNavOptions }}
      initialRouteName="UserProducts">
      <AdminNavigator.Screen
        name="UserProducts"
        options={{ title: 'User Products' }}
        component={UserProductsScreen}
      />
      <AdminNavigator.Screen
        name="EditProduct"
        // options={{ title: 'Edit Product' }}
        component={EditProductScreen}
      />
    </AdminNavigator.Navigator>
  );
};

export default ShopNavigator;
