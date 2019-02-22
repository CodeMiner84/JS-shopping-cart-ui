import * as React from 'react';
import { Card, Col } from 'antd';
import { connect } from 'react-redux';
import { addToCart } from '../../Cart/actions';
import Meta from '../components/Meta';
import Icon from '../components/Icon';
import Price from '../components/Price';
import { ProductModel } from '../index';

type ProductProps = {
  product: ProductModel;
  addToCart: (product: ProductModel) => void;
};

const Product: React.FC<ProductProps> = (props: ProductProps) => (
  <Col className="gutter-row" span={6}>
    <div className="gutter-box">
      <Card
        hoverable={true}
        cover={<img alt={props.product.title} src={props.product.image} />}
        style={{ marginBottom: '20px' }}
        actions={[
          <Price key={1}>${props.product.price}</Price>,
          <Icon
            type="shopping-cart"
            key={2}
            onClick={() => props.addToCart(props.product)}
          />,
        ]}
      >
        <Meta title={props.product.title} description={props.product.description} />
      </Card>
    </div>
  </Col>
);

export default connect(
  null,
  {
    addToCart,
  },
)(Product);
