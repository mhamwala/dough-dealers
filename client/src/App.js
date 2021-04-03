import React from 'react';
import './App.css';
import { ShowProducts } from './ShowProducts';
import { ProductForm } from './ProductsForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(res => this.setState({ products: res }, console.log(res)));
  }

  render() {
    return (
      <div className="App">
        <ProductForm handler={this.componentDidMount} />
        <ShowProducts products={this.state.products}/>
      </div>
    );
  }
}

export default App;
