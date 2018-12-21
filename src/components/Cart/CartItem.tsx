import * as React from 'react';
import { CartItem } from 'src/models/cart';
import { recalculateCart } from '../../actions';
import { connect } from 'react-redux';

interface CartElementProps {
  product: CartItem;
  recalculate: (id: string, quantity: number) => void;
}

const CartElement: React.SFC<CartElementProps> = ({
  product,
  recalculate,
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
          onChange={() => recalculate(product.id, product.quantity)}
        />
      </td>
      <td>{product.quantity * product.price}</td>
    </tr>
  );
};

const mapDispatchToProps = {
  recalculate: recalculateCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(CartElement);
