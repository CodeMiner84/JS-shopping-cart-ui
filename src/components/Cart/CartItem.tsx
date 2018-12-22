import * as React from 'react';
import { CartItem } from 'src/models/cart';
import { recalculateCart, removeFromCart } from '../../actions';
import { connect } from 'react-redux';
import { Icon } from 'antd';

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
        <Icon
          type="delete"
          theme="filled"
          style={{ cursor: 'pointer' }}
          onClick={() => remove(product._id)}
        />
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
