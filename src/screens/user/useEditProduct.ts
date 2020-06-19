import { useState, useCallback } from 'react';

//  Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../App';
import * as productsActions from '../../store/actions/products';

//  Navigation
import { useNavigation } from '@react-navigation/native';

//  Models
import Product from '../../models/product';

function useEditProduct(
  prodId: string,
): [
  string,
  (title: string) => void,
  string,
  (title: string) => void,
  string,
  (title: string) => void,
  string,
  (title: string) => void,
  () => void,
  Product | undefined,
] {
  const editedProduct = useSelector((state: RootState) =>
    state.products.userProducts.find((prod) => prod.id === prodId),
  );

  const [title, setTitle] = useState<string>(
    editedProduct ? editedProduct.title : '',
  );
  const [imageUrl, setImageUrl] = useState<string>(
    editedProduct ? editedProduct.imageUrl : '',
  );
  const [price, setPrice] = useState<string>('');

  const [description, setDescription] = useState<string>(
    editedProduct ? editedProduct.description : '',
  );

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const submitHandler = useCallback(() => {
    if (editedProduct) {
      dispatch(
        productsActions.updateProduct(prodId, title, description, imageUrl),
      );
    } else {
      dispatch(
        //  O sinal '+' converte price para number
        productsActions.createProduct(title, description, imageUrl, +price),
      );
    }
    navigation.goBack();
  }, [
    dispatch,
    prodId,
    title,
    description,
    imageUrl,
    price,
    editedProduct,
    navigation,
  ]);

  return [
    title,
    setTitle,
    imageUrl,
    setImageUrl,
    price,
    setPrice,
    description,
    setDescription,
    submitHandler,
    editedProduct,
  ];
}

export default useEditProduct;
