import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct() {
        this.props.onRemove(this.props.product);
    }

    render() {
        return (
            <div className="Product">
                <div className="Trac-Information">
                    <h3>Name: {this.props.product.product_name}</h3>
                    <p>Stock: {this.props.product.stock}</p>
                    <p>Price: {this.props.product.base_price}</p>
                </div>
                <button onClick={this.removeProduct}>Delete</button>
            </div>
        );
    }
}

export { Product };