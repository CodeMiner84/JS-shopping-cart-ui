import * as React from 'react';
import { Row, Col } from 'antd';
import { TextHeader } from '../../Layout';
import Product from './Product';
import { ProductModel } from '../index';

type Props = {
  products: ProductModel[];
};

const ProductList: React.SFC<Props> = ({ products }) => (
  <Row>
    <Col md={{ span: 22, offset: 1 }} lg={{ span: 14, offset: 4 }}>
      <TextHeader title="Product list" />
      {products !== undefined && (
        <Row gutter={12}>
          {Object.keys(products).map(key => (
            <Product key={key} product={products[key]} />
          ))}
        </Row>
      )}
    </Col>
  </Row>
);

export default ProductList;
