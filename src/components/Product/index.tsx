import * as React from 'react';
import { connect } from 'react-redux';
import { Product } from './Product';
import { ProductModel } from '../../api/models/product';
import Row from 'reactstrap/lib/Row';
import { getProducts } from '../../actions';

interface IProductProps {
  readonly getProducts: () => void;
  readonly products: ProductModel[];
}

class Products extends React.Component<IProductProps, any> {
  constructor(props: IProductProps) {
    super(props);

    props.getProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <React.Fragment>
        <h1>Product list</h1>
        <Row>
          {products !== undefined && (
            <React.Fragment>
              {Object.keys(products).map(key => (
                <Product key={key} {...products[key]} />
              ))}
            </React.Fragment>
          )}
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: Partial<IProductProps>) => state;

const mapDispatchToProps = {
  getProducts: getProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
