import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, brand, img, info, price, title, inCart } = value.detailProduct;

          return (
            <div className="container mt-5">
              {/* Title */}
                <div className="row">
                  <div className="col-10 mx-auto text-center mb-1">
                    <h3>{title}</h3>
                  </div>
                </div>
              {/* End Title */}
              {/* Product Info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="Product" />
                </div>
                {/* Product Text */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h4>Model: {title}</h4>
                  <h5 className="text-muted mt-3 mb-2">Brand: {brand}</h5>
                  <h6>
                    <strong>
                      Price: <span>£</span>{price}
                    </strong>
                  </h6>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">Product Information:</p>
                  <p className="text-muted">{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back</ButtonContainer>
                    </Link>
                    <ButtonContainer 
                      cart
                      disabled={inCart ? true : false} 
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}>
                        {inCart ? 'In Cart' : 'Add To Cart'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
