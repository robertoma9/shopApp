import { ADD_ORDER, OrderActionTypes, Item } from './types';

export function addOrder(
  cartItems: Array<Item>,
  totalAmount: number,
): OrderActionTypes {
  return {
    type: ADD_ORDER,
    orderData: { items: cartItems, amount: totalAmount },
  };
}
