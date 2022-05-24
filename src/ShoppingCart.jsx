import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    console.log("render-ShoppingCart");
    return (
      <div className="container-fluid">
        <div className="row">
          <h4 className="cart">Shopping Cart</h4>
          {this.state.products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            >
              <button className="btn btn-primary">Buy Now</button>
            </Product>
          ))}
        </div>
      </div>
    );
  }
  componentDidMount = async () => {
    console.log("componentDidMount-ShoppingCart");
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    console.log(response);
    var products = await response.json();
    console.log(products);
    this.setState({ products: products });
  };

  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    allProducts.splice(index, 1);
    this.setState({ products: allProducts });
  };
}
