import * as React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { ProductModel } from 'src/models/product';
import Col from 'reactstrap/lib/Col';
import Price from './Price';
import { addToCart } from '../../actions/index';
import { connect } from 'react-redux';
import { IAppState } from '../../application/index';

interface IProductProps {
  addToCart: (title: ProductModel) => void;
}

const Product: React.SFC<ProductModel & Partial<IAppState> & IProductProps> = (
  props: ProductModel & Partial<IAppState> & IProductProps,
) => (
  <Col sm="6" md="3" lg="2" xs="12">
    <Card>
      <CardImg
        top={true}
        width="100%"
        max-height="80"
        src={props.image}
        alt={props.title}
      />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardText>
          <strong>{props.description}</strong>
        </CardText>
        <Price>${props.price}</Price>
        <Button onClick={() => props.addToCart(props)}>Add to cart</Button>
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
