import * as React from 'react';
import { connect } from 'react-redux';
import CartElement from './CartItem';
import { getCart } from '../../actions/cart';
import { Row, Col } from 'antd';
import Headers from './components/Headers';
import Summary from './Summary';
import TextHeader from '../Layout/TextHeader';

class Cart extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);

    props.getCart();
  }

  render() {
    const { cartItems } = this.props;

    return (
      <Row>
        <Col md={{ span: 22, offset: 1 }} lg={{ span: 14, offset: 4 }}>
          <TextHeader>Shopping cart</TextHeader>
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
          <Summary />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state: any) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = {
  getCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
