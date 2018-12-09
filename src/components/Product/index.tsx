import * as React from 'react';
import { connect } from 'react-redux';
import { Product } from './Product';
import Row from 'reactstrap/lib/Row';
import { getProducts } from '../../actions';
import { IAppState } from '../../application/index';

interface IProductProps {
  readonly getProducts: () => void;
}

class Products extends React.Component<IProductProps & IAppState, any> {
  constructor(props: IProductProps & IAppState) {
    super(props);

    props.getProducts();
  }

  render() {
    const { products, loading } = this.props;

    if (loading) {
      return <div />;
    }

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
