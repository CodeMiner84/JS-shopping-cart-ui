import * as React from 'react';
import { connect } from 'react-redux';
import CartElement from './CartItem';
import { getCart } from '../../actions/cart';

class Cart extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);

    props.getCart();
  }

  render() {
    const { cartItems } = this.props;

    return (
      <div>
        Cart Page
        <table className={'table table-hover'}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          {cartItems &&
            cartItems.map((item: any) => <CartElement key={item._id} product={item} />)}
        </table>
      </div>
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
