import React, { useLayoutEffect, memo } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';

//  Redux imports
import { useRoute, RouteProp } from '@react-navigation/native';

// Navigation imports
import { useNavigation } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AdminNavigatorParams } from '../../navigation/NavigationParams';

// Components
import HeaderButton from '../../components/UI/HeaderButton';

// Custom hooks
import useEditProduct from './useEditProduct';

type EditScreenRouteProp = RouteProp<AdminNavigatorParams, 'EditProduct'>;

const EditProductScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<EditScreenRouteProp>();

  const prodId = route.params?.productId;

  const [
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
  ] = useEditProduct(prodId);

  // A única diferença entre useLayoutEffect e useEffect é que o primeiro está relacionado apenas
  // a efeitos colaterais do DOM
  useLayoutEffect(() => {
    // navigation.setOptions({}) -> utilizado para definir estilo do cabeçalho da tela atual
    navigation.setOptions({
      headerTitle: editedProduct ? 'Edit Product' : 'Add Product',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName={
              Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
            }
            onPress={submitHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [submitHandler, navigation, editedProduct]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    // fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default memo(EditProductScreen);
