import moment from 'moment';

type Item = {
  productId: string;
  productTitle: string;
  productPrice: number;
  quantity: number;
  sum: number;
};

class Order {
  id: string;
  items: Array<Item>;
  totalAmount: number;
  date: Date;

  constructor(id: string, items: Array<Item>, totalAmount: number, date: Date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get readableDate() {
    return moment(this.date).format('MMMM Do YYYY, hh:mm');
  }
}

export default Order;
