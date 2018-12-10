import * as React from 'react';
import { connect } from 'react-redux';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

class Dashboard extends React.Component<any, {}> {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        Cart Page
        <Row>
          {Object.keys(cartItems).map((key: any) => (
            <Col key={cartItems[key].id}>
              {cartItems[key].title} ____ {cartItems[key].quantity}
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps)(Dashboard);
