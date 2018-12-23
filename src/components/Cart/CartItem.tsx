import * as React from 'react';
import { CartItem } from 'src/models/cart';
import { recalculateCart, removeFromCart } from '../../actions';
import { connect } from 'react-redux';
import { Icon, Input } from 'antd';

interface CartElementProps {
  product: CartItem;
  recalculate: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  ShouldComponentUpdate: (nextProps: any) => boolean;
}

interface CartState {
  quantity: number;
}

class CartElement extends React.PureComponent<CartElementProps, {}> {
  readonly state: CartState = {
    quantity: 0,
  };

  constructor(props: CartElementProps) {
    super(props);

    this.state.quantity = props.product.quantity;
  }

  render() {
    const { product, recalculate, remove } = this.props;

    return (
      <tr>
        <td>
          <img src="{product.image}" height={50} alt="" />
        </td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{this.state.quantity}</td>
        <td>
          <Input
            type="number"
            value={product.quantity}
            style={{ width: '60px' }}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              const quantity = parseInt((e.target as HTMLInputElement).value, 10);
              this.setState({ quantity: quantity });
              recalculate(product._id, quantity);
            }}
          />
        </td>
        <td>{(product.quantity * product.price).toFixed(2)}</td>
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
  }
}

const mapDispatchToProps = {
  recalculate: recalculateCart,
  remove: removeFromCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(CartElement);
