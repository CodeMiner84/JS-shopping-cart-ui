import * as React from 'react';
import { CartItem } from 'src/models/cart';

interface CartElementProps {
  product: CartItem;
}

const CartElement: React.SFC<CartElementProps> = ({ product }: CartElementProps) => (
  <tr>
    <td>
      <img src="{product.image}" height={50} alt="" />
    </td>
    <td>{product.title}</td>
    <td>{product.price}</td>
    <td>{product.quantity}</td>
    <td>{product.quantity * product.price}</td>
  </tr>
);

export default CartElement;
