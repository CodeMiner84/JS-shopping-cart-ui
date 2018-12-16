import * as React from 'react';
import { connect } from 'react-redux';
import CartElement from './CartItem';

class Cart extends React.Component<any, {}> {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        Cart Page
        <table className={'table table-hover'}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
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

export default connect(mapStateToProps)(Cart);
