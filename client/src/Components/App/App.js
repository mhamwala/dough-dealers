import React from 'react';
import axios from 'axios';
import './App.css';
import { ProductsList } from '../ProductsList/ProductsList';
import { AddProduct } from '../AddProduct/AddProduct';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  // On Load, fill { products } object with response.
  // Then, pass the object { products } to ShowProducts Component
  loadData = () => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(res => this.setState({ products: res }, console.log(res)));
  }
  componentDidMount() {
    this.loadData();
  }

  // Remove Product
  removeProduct(product) {
    axios.post(`http://localhost:5000/remove/${product.id}`)
        .then(res => {
            console.log(res);
            this.loadData();
        })
        .catch(err => {
            console.log(err);
        })
  }

  render() {
    return (
      <div className="App">
        <AddProduct handler={this.componentDidMount} />
        <ProductsList
          products={this.state.products}
          onRemove={this.removeProduct} />
      </div>
    );
  }
}

export default App;
