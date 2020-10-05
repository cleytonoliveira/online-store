import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductsCard from './ProductsCard';

export default class ProductList extends Component {
  render() {
    const { queryInput, foundItems, products } = this.props;
    const zero = 0;
    return (
      <div>
        {/* if there is not anything in query input, render this block */}
        {queryInput === '' && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        {/* if there are no product found from API, render this block */}
        {queryInput !== '' && !foundItems && (
          <p data-testid="home-initial-message">
            Nenhum produto foi encontrado
          </p>
        )}
        {/* if there are products, render this block */}
        {Object.keys(products).length !== zero
          && products.results.map((prod) => (
            <ProductsCard key={ prod.title } product={ prod } />
          ))}
      </div>
    );
  }
}

ProductList.defaultProps = {
  foundItems: false,
};

ProductList.propTypes = {
  queryInput: PropTypes.string.isRequired,
  foundItems: PropTypes.bool,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};