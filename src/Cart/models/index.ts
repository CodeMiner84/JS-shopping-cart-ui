export interface CartItemModel {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  productId?: number;
}

export type CartModel = CartItemModel[];
