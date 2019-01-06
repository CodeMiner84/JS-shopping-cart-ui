export interface CartItemModel {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  product_id?: number;
}

export type CartModel = CartItemModel[];
