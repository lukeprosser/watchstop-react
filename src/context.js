import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext(); // Create state using Context API
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: []
  }

  componentDidMount() {
    this.setProducts();
  }

  // Make a copy of every item (instead of referencing the original data - avoids mutating state)
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

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail = id => {
    // Get product from state
    const product = this.getItem(id);
    // Set product for detail view
    this.setState(() => {
      return { detailProduct: product }
    })
  }

  addToCart = id => {
    // Get all products from state (to avoid mutating the state)
    let tempProducts = [ ...this.state.products ];
    // Get index to ensure that product is re-inserted in correct position in products array 
    // (avoid product order changing i.e. added product last)
    const index = tempProducts.indexOf(this.getItem(id));
    // Set product with correct position
    const product = tempProducts[index];
    // Set cart info
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    // Update state with updated product info and cart
    this.setState(() => {
      return { 
        products: tempProducts,
        cart: [ ...this.state.cart, product ]
      }
    }, () => { console.log(this.state) })
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