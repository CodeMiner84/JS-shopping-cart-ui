import * as React from 'react';
import { connect } from 'react-redux';
import Price from '../Dashboard/Price';
import { Container, Row } from './components/SummaryComponents';

const Summary: React.SFC<any> = props => (
  <Container>
    <Row>
      <label>SUBTOTAL: </label>
      <span>{props.price}</span>
    </Row>
    <Row>
      <label>ORDER TOTAL: </label>
      <span>{props.price}</span>
    </Row>
  </Container>
);

const mapStateToProps = (state: any) => {
  return {
    price: state.checkout.price,
  };
};

export default connect(mapStateToProps)(Summary);
