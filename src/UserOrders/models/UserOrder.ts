export interface OrderProps {
  _id: string;
  customer_id: number;
  price: number;
  created_at: Date;
  products: OrderProductProps[];
}

export interface OrderProductProps {
  _id: string;
  amount: number;
  created_at: Date;
  order_id: string;
  price: number;
  product_id: string;
  quantity: number;
  title: string;
}
