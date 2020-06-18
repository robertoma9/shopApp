import { ADD_TO_CART, REMOVE_FROM_CART, CartActionTypes } from './types';
import Product from '../../models/product';

export function addToCart(product: Product): CartActionTypes {
  return {
    type: ADD_TO_CART,
    product: product,
  };
}

export function removeFromCart(productId: string): CartActionTypes {
  return {
    type: REMOVE_FROM_CART,
    pid: productId,
  };
}
