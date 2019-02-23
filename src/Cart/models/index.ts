export interface CartItemModel {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  productId?: number;
}

export type CartModel = CartItemModel[];
