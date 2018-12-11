export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type Cart = CartItem[];
