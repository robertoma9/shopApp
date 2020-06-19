import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import CartItem from './CartItem';
import Colors from '../../constants/Colors';
import Card from '../UI/Card';

import { Item } from '../../store/actions/types';

import useOrderItem from './useOrderItem';

type OrderItemProp = {
  /*Type que define as props. Não precisa de "children" pois já se trata de uma prop padrão para
  componentes*/
  items: Array<Item>;
  amount: number;
  date: string;
};

const OrderItem: React.FC<OrderItemProp> = ({ amount, date, items }) => {
  const [showDetails, setShowDetails] = useOrderItem();

  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${amount.toFixed(2)}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() =>
          showDetails ? setShowDetails(false) : setShowDetails(true)
        }
      />
      {showDetails && (
        <View style={styles.detailItems}>
          {items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  totalAmount: {
    // fontFamily: 'open-sans-bold',
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    // fontFamily: 'open-sans',
    color: '#888',
  },
  detailItems: {
    width: '100%',
  },
});

export default OrderItem;
