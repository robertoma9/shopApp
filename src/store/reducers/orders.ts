import { ADD_ORDER, OrdersState, OrderActionTypes } from '../actions/types';
import Order from '../../models/order';

const initialState: OrdersState = {
  orders: [],
};

export default function (
  state = initialState,
  action: OrderActionTypes,
): OrdersState {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        new Date(),
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
    default:
      return state;
  }
}
