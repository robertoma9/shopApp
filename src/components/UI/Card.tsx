import React from 'react';
import {View, StyleSheet} from 'react-native';

interface CardProps {
  /*Interface que define as props. Não precisa de "children" pois já se trata de uma prop padrão para
  componentes*/
  style: object;
}

const Card: React.FC<CardProps> = ({style, children}) => {
  // const <Nome-do-componente> : <Tipo-do-componente><Definição-das-props>
  return <View style={{...styles.card, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default Card;
