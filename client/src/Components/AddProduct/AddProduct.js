import React from 'react';
import axios from 'axios';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            stock: '',
            basePrice: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    reloadData() {
        this.props.handler();
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:5000/addProduct', this.state)
            .then(res => {
                console.log(res);
                this.reloadData();
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { productName, stock, basePrice } = this.state;
        return (
            <form onSubmit={this.submitHandler}>

                <input
                    placeholder="Product Name"
                    value={productName}
                    name="productName"
                    onChange={this.changeHandler} />

                <input
                    placeholder="Stock"
                    value={stock}
                    name="stock"
                    onChange={this.changeHandler} />

                <input
                    placeholder="Price"
                    value={basePrice}
                    name="basePrice"
                    onChange={this.changeHandler} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export { AddProduct };
