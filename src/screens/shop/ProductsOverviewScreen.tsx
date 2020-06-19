import React, { useLayoutEffect } from 'react';
import { FlatList, Button, Platform } from 'react-native';

// Redux imports
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cart';
import { RootState } from '../../../App';

//  Navigation imports
import { useNavigation } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

//  Component imports
import ProductItem from '../../components/shop/ProductItem';

import Colors from '../../constants/Colors';

const ProductsOverviewScreen: React.FC = () => {
  const products = useSelector(
    (state: RootState) => state.products.availableProducts,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const selectItemHandler = (id: string, title: string): void => {
    navigation.navigate('ProductDetail', {
      productId: id,
      productTitle: title,
    });
  };

  // A única diferença entre useLayoutEffect e useEffect é que o primeiro está relacionado apenas
  // a efeitos colaterais do DOM
  useLayoutEffect(() => {
    // navigation.setOptions({}) -> utilizado para definir estilo do cabeçalho da tela atual
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            onPress={() => {
              navigation.navigate('Cart');
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          image={itemData.item.imageUrl}
          onSelect={() =>
            selectItemHandler(itemData.item.id, itemData.item.title)
          }>
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() =>
              selectItemHandler(itemData.item.id, itemData.item.title)
            }
          />
          <Button
            color={Colors.primary}
            title="To Cart"
            onPress={() => dispatch(cartActions.addToCart(itemData.item))}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductsOverviewScreen;
