import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ShopItemProps {
  shopItem: {id: number; name: string};
}

const ShopItem: React.FC<ShopItemProps> = ({shopItem}) => {
  return (
    <View style={styles.container}>
      <Text>{shopItem.id}</Text>
      <Text>{shopItem.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
    flexDirection: 'row',
  },
});

export default ShopItem;
