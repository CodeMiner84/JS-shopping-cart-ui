import * as React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { ProductModel } from 'src/models/product';
import Col from 'reactstrap/lib/Col';
import Price from './Price';
import { addToCart } from '../../actions/index';
import { connect } from 'react-redux';

interface ProductProps {
  product: ProductModel;
  addToCart: (title: ProductModel) => void;
}

const Product: React.SFC<ProductProps> = (props: ProductProps) => (
  <Col sm="6" md="3" lg="2" xs="12">
    <Card>
      <CardImg
        top={true}
        width="100%"
        max-height="80"
        src={props.product.image}
        alt={props.product.title}
      />
      <CardBody>
        <CardTitle>{props.product.title}</CardTitle>
        <CardText>
          <strong>{props.product.description}</strong>
        </CardText>
        <Price>${props.product.price}</Price>
        <Button onClick={() => props.addToCart(props.product)}>Add to cart</Button>
      </CardBody>
    </Card>
  </Col>
);

const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(Product);
