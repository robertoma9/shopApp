import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CartItemProps {
  //Interface que define as props
  quantity: number;
  amount: number;
  title: string;
  deletable?: boolean; // Interrogação torna a prop opcional
  onRemove?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void; // Interrogação torna a prop opcional
}

const CartItem: React.FC<CartItemProps> = ({
  // const <Nome-do-componente> : <Tipo-do-componente><Definição-das-props>
  quantity,
  amount,
  title,
  deletable,
  onRemove,
}) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{quantity} </Text>
        <Text style={styles.mainText}>{title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${amount.toFixed(2)}</Text>
        {deletable && (
          <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
            <Ionicons
              name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
              size={23}
              color="red"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    // fontFamily: 'open-sans',
    color: '#888',
    fontSize: 16,
  },
  mainText: {
    // fontFamily: 'open-sans-bold',
    fontWeight: 'bold',
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;
