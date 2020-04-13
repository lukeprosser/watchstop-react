import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext(); // Create state using Context API
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  }

  componentDidMount() {
    this.setProducts();
  }

  // Make a copy of every item 
  // (instead of referencing the original data -
  // avoids mutating state)
  setProducts = () => {
    let tempProducts = [];

    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [ ...tempProducts, singleItem ];
    });

    this.setState(() => {
      return { products: tempProducts }
    });
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
    });
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
    }, () => { this.addTotals(); }); // Calculate updated totals
  }

  openModal = id => {
    const product = this.getItem(id);

    this.setState(() => {
      return {
        modalOpen: true,
        modalProduct: product
      }
    });
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    });
  }

  increment = id => {
    let tempCart = [ ...this.state.cart ];
    // Locate product in cart
    const selectedProduct = tempCart.find(item => item.id === id);
    // Find product index
    const index = tempCart.indexOf(selectedProduct);
    // Set product
    const product = tempCart[index];
    // Update product details
    product.count = product.count + 1;
    product.total = product.count * product.price;
    // Update cart with product info
    this.setState(() => {
      return {
        cart: [ ...tempCart ] 
      }
    }, () => { this.addTotals(); }); // Calculate totals at latest point
  }

  decrement = id => {
    let tempCart = [ ...this.state.cart ];
    // Locate product in cart
    const selectedProduct = tempCart.find(item => item.id === id);
    // Find product index
    const index = tempCart.indexOf(selectedProduct);
    // Set product
    const product = tempCart[index];
    // Update product details
    product.count = product.count - 1;
    // If item count is less than 1, remove it from the cart
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(() => {
        return {
          cart: [ ...tempCart ]
        }
      }, () => { this.addTotals(); });
    }
  }

  removeItem = id => {
    let tempProducts = [ ...this.state.products ];
    let tempCart = [ ...this.state.cart ];
    // Remove item from cart with matching id
    tempCart = tempCart.filter(item => item.id !== id);
    // Locate removed product position in all products
    const index = tempProducts.indexOf(this.getItem(id));
    // Set product with correct position
    let removedProduct = tempProducts[index];
    // Reset product values
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    // Update state with updated product info and cart
    this.setState(() => {
      return {
        cart: [ ...tempCart ],
        products: [ ...tempProducts ]
      }
    }, () => { this.addTotals(); }); // Calculate updated totals
  }

  clearCart = () => {
    this.setState(() => {
      return {
        cart: []
      }
    }, () => {
      // Set modified objects back to defaults
      // (again, uses copies instead of reference)
      this.setProducts();
      this.addTotals();
    });
  }

  addTotals = () => {
    let subTotal = 0;
    // Sum all item totals in cart
    this.state.cart.map(item => (subTotal += item.total));
    // Calculate tax
    const tax = subTotal * 0.2;
    // Calculate total
    const total = subTotal + tax;
    // Set totals in state (converted to strings with 2 decimal places in view)
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    });
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };