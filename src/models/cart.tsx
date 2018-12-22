export type CartItem = {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type Cart = CartItem[];
