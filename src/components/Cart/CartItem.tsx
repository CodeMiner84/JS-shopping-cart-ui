import * as React from 'react';
import { CartItem } from 'src/models/cart';
import { recalculateCart, removeFromCart } from '../../actions';
import { connect } from 'react-redux';

interface CartElementProps {
  product: CartItem;
  recalculate: (id: string, quantity: number) => void;
  remove: (id: string) => void;
}

const CartElement: React.SFC<CartElementProps> = ({
  product,
  recalculate,
  remove,
}: CartElementProps) => {
  return (
    <tr>
      <td>
        <img src="{product.image}" height={50} alt="" />
      </td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <input
          type="number"
          onChange={() => recalculate(product._id, product.quantity)}
        />
      </td>
      <td>{product.quantity * product.price}</td>
      <td>
        <span onClick={() => remove(product._id)}>remove</span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = {
  recalculate: recalculateCart,
  remove: removeFromCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(CartElement);
