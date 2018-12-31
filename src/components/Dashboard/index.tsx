import * as React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions';
import { ProductModel } from '../../models/product';
import ProductList from './ProductList';

type Props = {
  getProducts: () => void;
  products: ProductModel[];
};

type StateProps = {
  product: {
    products: ProductModel[];
  };
};

class Dashboard extends React.Component<Props> {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return <ProductList products={this.props.products} />;
  }
}

const mapStateToProps = ({ product: { products } }: StateProps) => ({
  products,
});

export default connect(
  mapStateToProps,
  {
    getProducts,
  },
)(Dashboard);
