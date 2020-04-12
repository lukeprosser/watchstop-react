import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext(); // Create state using Context API
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  }

  componentDidMount() {
    this.setProducts();
  }

  // Make a copy of every item (instead of referencing the original data)
  setProducts = () => {
    let tempProducts = [];

    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [ ...tempProducts, singleItem ];
    });

    this.setState(() => {
      return { products: tempProducts }
    })
  }

  handleDetail = () => {
    console.log('Hello from detail');
  }

  addToCart = id => {
    console.log(`Item added to cart with id ${id}`);
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };