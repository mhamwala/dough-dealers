import React from 'react';

class ShowProducts extends React.Component {
    loadData() {
        return (
            <div>
                {this.props.products.map((product, i) => (
                    <div key={i}>
                        <p style={{ fontSize: "12px" }}>Product: {product.product_name} - Stock: {product.stock}</p>
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div className="App">
                {this.loadData()}
            </div>
        );
    }
}

export { ShowProducts };