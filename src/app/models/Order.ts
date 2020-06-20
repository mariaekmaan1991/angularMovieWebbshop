export default class Order {
  id: number;
  companyId: number;
  created: Date;
  createdBy: string;
  paymentMethod: string;
  totalPrice: Number;
  status: Number;
  orderRows: Array<OrderRow>;
}
export class OrderRow {
  id: Number;
  productId: Number;
  product: null;
  amount: Number;
  orderId: Number;
}
/*let hej = {
  id: 4122,
  companyId: 0,
  created: '0001-01-01T00:00:00',
  createdBy: 'asa',
  paymentMethod: 'MasterCard',
  totalPrice: 199,
  status: 2,
  orderRows: [
    { id: 4892, productId: 76, product: null, amount: 2, orderId: 4122 },
  ],
};*/
