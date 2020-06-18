import React, { useLayoutEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native';

//  Redux imports
import { RootState } from '../../../App';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cart';

import { useNavigation } from '@react-navigation/native';
import { ProductsNavigatorParams } from '../../navigation/NavigationParams';

import Colors from '../../constants/Colors';

type ProfileScreenRouteProp = RouteProp<
  ProductsNavigatorParams,
  'ProductDetail'
>;

const ProductDetailScreen: React.FC = () => {
  const navigation = useNavigation();

  /* "useRoute" serve para a captura de props passadas pelo navigation */
  const route = useRoute<ProfileScreenRouteProp>();

  /* A linha abaixo captura a prop productId passada a partir da navegação da tela "ProductOverviewScreen" 
  para a tela atual (Ex: route.params.someParam)*/
  const productId = route.params.productId;
  const selectedProduct = useSelector((state: RootState) =>
    state.products.availableProducts.find((prod) => prod.id === productId),
  );

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({ title: selectedProduct?.title });
  }, [navigation, selectedProduct]);

  return (
    <ScrollView>
      {/* A interrogação indica que "selectedProduct" se trata de um valor
      opcional (Pode ser reescrito da seginte forma: selectedProduct && selectedProduct.imageUrl)  */}
      <Image style={styles.image} source={{ uri: selectedProduct?.imageUrl }} />
      <View style={styles.actions}>
        {/* A exclamação indica que selectedProduct nunca será nulo ou undefined*/}
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => dispatch(cartActions.addToCart(selectedProduct!))}
        />
      </View>
      <Text style={styles.price}>${selectedProduct?.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct?.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;
