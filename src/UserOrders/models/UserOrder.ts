export interface OrderProps {
  id: string;
  userId: number;
  price: number;
  created_at: Date;
  products: OrderProductProps[];
}

export interface OrderProductProps {
  id: string;
  amount: number;
  created_at: Date;
  orderId: string;
  price: number;
  productId: string;
  quantity: number;
  title: string;
}
