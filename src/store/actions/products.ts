import {
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  CREATE_PRODUCT,
  ProductActionTypes,
} from './types';

export function deleteProduct(productId: string): ProductActionTypes {
  return { type: DELETE_PRODUCT, pid: productId };
}

export function createProduct(
  title: string,
  description: string,
  imageUrl: string,
  price: number,
): ProductActionTypes {
  return {
    type: CREATE_PRODUCT,
    productData: {
      title,
      description,
      imageUrl,
      price,
    },
  };
}

export function updateProduct(
  id: string,
  title: string,
  description: string,
  imageUrl: string,
): ProductActionTypes {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title,
      description,
      imageUrl,
    },
  };
}
