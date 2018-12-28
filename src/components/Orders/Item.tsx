import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse } from 'antd';
import Headers from '../Cart/components/Headers';
import { Container, Row } from '../Cart/components/SummaryComponents';

const Panel = Collapse.Panel;

const OrderItem: React.SFC<any> = ({ order }) => {
  const products = order.products;
  return (
    <React.Fragment>
      <h5>Ordered products</h5>
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
        {products.map((product: any) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>${product.amount}</td>
          </tr>
        ))}
      </table>
      <Container>
        <Row>
          <label>TOTAL: </label>
          <span>${order.price}</span>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default OrderItem;
