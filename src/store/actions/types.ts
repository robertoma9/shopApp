import Order from '../../models/order';
import Product from '../../models/product';
import CartItem from '../../models/cart-item';

// CART TYPES

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export interface CartState {
  items: { [id: string]: CartItem };
  totalAmount: number;
}

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  product: Product;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  pid: string;
}

// ORDER TYPES

export const ADD_ORDER = 'ADD_ORDER';

export type Item = {
  productId: string;
  productTitle: string;
  productPrice: number;
  quantity: number;
  sum: number;
};

export interface OrdersState {
  orders: Array<Order>;
}

interface AddOrderAction {
  type: typeof ADD_ORDER;
  orderData: {
    items: Array<Item>;
    amount: number;
  };
}

// PRODUCT TYPES

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export interface ProductsState {
  availableProducts: Array<Product>;
  userProducts: Array<Product>;
}

interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  pid: string;
}

interface CreateProductAction {
  type: typeof CREATE_PRODUCT;
  productData: {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
  };
}

interface UpdateProductAction {
  type: typeof UPDATE_PRODUCT;
  pid: string;
  productData: {
    title: string;
    description: string;
    imageUrl: string;
  };
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction;
export type OrderActionTypes = AddOrderAction;
export type ProductActionTypes =
  | DeleteProductAction
  | CreateProductAction
  | UpdateProductAction;
