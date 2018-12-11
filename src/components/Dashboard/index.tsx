import * as React from 'react';
import { connect } from 'react-redux';
import CartElement from './CartItem';

class Dashboard extends React.Component<any, {}> {
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
          <tbody>
            {Object.keys(cartItems).map((key: string) => (
              <CartElement key={key} product={cartItems[key]} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps)(Dashboard);
