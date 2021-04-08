import React from 'react';
import { Product } from '../Product/Product';

class ProductsList extends React.Component {
    render() {
        return (
            <div className="ProductsList">
                {this.props.products.map(product => (
                    <Product 
                        product={product}
                        key={product.id}
                        onRemove={this.props.onRemove} />
                ))}
            </div>
        );
    }
}

export { ProductsList };