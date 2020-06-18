// https://reactnavigation.org/docs/typescript/#type-checking-the-navigator -> Tipagem de navegadores

/* Cada objeto corresponde a um navegador definido no arquivo "ShopNavigator.tsx". Cada propriedade 
presente em um objeto corresponde a uma tela dentro do navegador. O valor de cada propriedade são as props
que cada tela pode receber */

// navegador -> ProductsNavigator
export type ProductsNavigatorParams = {
  ProductsOverview: undefined; // "undefined" significa que esse componente não recebe nenhuma prop
  ProductDetail: { productId: string; productTitle: string };
  Cart: undefined;
  /*<tela>:<props>*/
};

// navegador -> OrdersNavigator
export type OrdersNavigatorParams = {
  Orders: undefined;
  /*<tela>:<props>*/
};

// navegador -> AdminNavigator
export type AdminNavigatorParams = {
  UserProducts: undefined;
  EditProduct: { productId: string };
  /*<tela>:<props>*/
};

// navegador -> ShopNavigator
export type ShopParams = {
  Products: undefined;
  Orders: undefined;
  Admin: undefined;
  /*<tela>:<props>*/
};
