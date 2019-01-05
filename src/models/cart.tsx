export interface CartItem {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  product_id?: number;
}

export type Cart = CartItem[];
