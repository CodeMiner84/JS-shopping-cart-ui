import * as React from 'react';
import { Card, Button } from 'antd';
import { ProductModel } from 'src/models/product';
import { Col } from 'antd';
import Price from './Price';
import { addToCart } from '../../actions/index';
import { connect } from 'react-redux';
import Meta from './components/Meta';

interface ProductProps {
  product: ProductModel;
  addToCart: (title: ProductModel) => void;
}

const Product: React.SFC<ProductProps> = (props: ProductProps) => (
  <Col className="gutter-row" span={6}>
    <div className="gutter-box">
      <Card
        hoverable={true}
        cover={<img alt={props.product.title} src={props.product.image} />}
        style={{ marginBottom: '20px' }}
        actions={[
          <Price key={1}>${props.product.price}</Price>,
          <Button key={2} onClick={() => props.addToCart(props.product)}>
            Add to cart
          </Button>,
        ]}
      >
        <Meta title={props.product.title} description={props.product.description} />
      </Card>
    </div>
  </Col>
);

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(Product);
