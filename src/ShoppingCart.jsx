import React, { Component } from 'react'
import Product from './Product'

export default class ShoppingCart extends Component {
    state = {
        products: [
            { 
                id: 1, 
                productName: "iPhone", 
                price: 8900, 
                quantity: 0 
            },
            { 
                id: 2, 
                productName:"Sony Camera", 
                price: 4500, 
                quantity: 0 
            },
            { 
                id: 3, 
                productName: "Samsung QLED TV", 
                price: 7745, 
                quantity: 0 
            },
            { 
                id: 4,
                productName: "iPad Pro", 
                price: 12400, 
                quantity: 0
             },
            { 
             id: 5, 
                productName: "Xbox",
                price: 7780, 
                quantity: 0 
            },
            { 
                id: 6,
                productName: "Dell Monitor", 
                price: 880, 
                quantity: 0 
            }
          ],
          
    };

  render() {
    return (
    <div className="container-fluid">  
      <div className="row">
        <h4 className="cart">
            Shopping Cart
        </h4>
        {this.state.products.map((product)=>
          <Product 
          key={product.id} 
          product={product}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          >
            <button className='btn btn-primary'>Buy Now</button>
          </Product>
        )}
      </div>
    </div>
    )
  }

  handleIncrement = (product,maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if(allProducts[index].quantity < maxValue){
      allProducts[index].quantity++;
      this.setState({products: allProducts});
    }
  };

  handleDecrement = (product,minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if(allProducts[index].quantity > minValue){
      allProducts[index].quantity--;
      this.setState({products: allProducts});
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    allProducts.splice(index, 1);
    this.setState({products: allProducts})
  };

}
