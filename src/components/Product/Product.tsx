import * as React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { ProductModel } from 'src/api/models/product';
import Col from 'reactstrap/lib/Col';
import Price from './Price';

export const Product: React.SFC<ProductModel> = props => (
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
        <Button>Add to cart</Button>
      </CardBody>
    </Card>
  </Col>
);
