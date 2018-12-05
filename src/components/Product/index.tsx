import * as React from 'react';
import { products } from '../../api/fixtures/products';
import { Product } from './Product';
import Row from 'reactstrap/lib/Row';

export default class Products extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <h1>Product list</h1>
        <Row>
          {Object.keys(products).map(key => (
            <Product key={key} {...products[key]} />
          ))}
        </Row>
      </React.Fragment>
    );
  }
}
