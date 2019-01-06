import * as React from 'react';
import { connect } from 'react-redux';
import CartElement from './CartItem';
import { getCart } from '../actions';
import { Row, Col } from 'antd';
import { Headers } from 'src/Cart';
import Summary from './Summary';
import { TextHeader } from 'src/Layout';
import { CartItemModel } from '../models';
import Loading from '../../Loading/Loading';
import withLoading from 'src/Loading/WithLoading';

type Props = {
  cartItems: CartItemModel[];
  getCart: () => void;
  loading: boolean;
};

type StateProps = {
  cart: {
    cartItems: CartItemModel[];
  };
};

class Cart extends React.Component<Props> {
  componentDidMount() {
    this.props.getCart();
  }

  render() {
    const { cartItems } = this.props;
    if (this.props.loading) {
      return <Loading />;
    }

    return (
      <Row>
        <Col md={{ span: 22, offset: 1 }} lg={{ span: 14, offset: 4 }}>
          <TextHeader title="Shopping cart" />
          <table className={'table table-hover'}>
            <thead>
              <tr>
                <Headers>Name</Headers>
                <Headers>Price</Headers>
                <Headers>Quantity</Headers>
                <Headers>Amount</Headers>
                <Headers>&nbsp;</Headers>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.map((item: any) => (
                  <CartElement key={item._id} product={item} />
                ))}
            </tbody>
          </table>
          <Summary canMakeOrder={cartItems.length > 0} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state: StateProps) => ({
  cartItems: state.cart.cartItems,
});

export default connect(
  mapStateToProps,
  {
    getCart,
  },
)(withLoading(Cart));
