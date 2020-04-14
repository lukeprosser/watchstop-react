import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="product-container">
          <ProductConsumer>
            {(value) => (
              <div className="img-container" onClick={() => value.handleDetail(id)}>
                <Link to="/details">
                  <img src={img} alt="Product" className="card-img-top" />
                </Link>
                <button 
                  className="cart-btn" 
                  disabled={inCart ? true : false} 
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}>
                  {inCart ? 
                    (<p className="text-capitalize mb-0" disabled>In Cart</p>) : 
                    (<i className="fas fa-cart-plus" />)
                  }
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* Card footer */}
          <div className="product-info d-flex justify-content-between">
            <p className="product-title align-self-center mb-0">
              {title}
            </p>
            <p className="mb-0">
              <span className="mr-1">£</span>
              {price}
            </p>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.4s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--ws-black);
    border: none;
    border-radius: 0.5rem 0 0 0;
    color: var(--ws-white);
    font-size: 1.3rem;
    transform: translate(100%, 100%);
    transition: all 0.2s ease-in-out;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    background: var(--ws-red);
  }

  .product-info {
    background: rgba(247, 247, 247);
    padding: 0.7rem;
  }

  .product-title {
    letter-spacing: 1px;
  }
`;