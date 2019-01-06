import * as React from 'react';
import { CartItemModel } from '../models';
import { recalculateCart, removeFromCart } from '../actions';
import { connect } from 'react-redux';
import { Icon, Input } from 'antd';

type Props = {
  product: CartItemModel;
  recalculate: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  ShouldComponentUpdate: (nextProps: any) => boolean;
};

type State = typeof initialState;

const initialState = { quantity: 0 };

class CartElement extends React.PureComponent<Props, State> {
  readonly state: State = initialState;

  componentDidMount() {
    this.setState({
      quantity: this.props.product.quantity,
    });
  }

  render() {
    const { product, recalculate, remove } = this.props;

    return (
      <tr>
        <td>{product.title}</td>
        <td>${product.price}</td>
        <td>{this.state.quantity}</td>
        <td>
          <Input
            type={'number'}
            value={product.quantity}
            style={{ width: '60px' }}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              const quantity = parseInt((e.target as HTMLInputElement).value, 10);
              this.setState({ quantity: quantity > 0 ? quantity : 1 });
              recalculate(product._id, quantity > 0 ? quantity : 1);
            }}
          />
        </td>
        <td>
          <Icon
            type={'delete'}
            theme={'filled'}
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
