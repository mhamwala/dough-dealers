import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(res => this.setState({products : res}, console.log(res)));
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.products.map(product => (
            <div>
              <p>Product: {product.product_name} - Stock: {product.stock}</p>
            </div>
          ))}

        </header>
      </div>
    );
  }
}

export default App;
