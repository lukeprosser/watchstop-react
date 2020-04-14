import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';
import PayPalButton from './PayPalButton';

export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-5 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <ButtonContainer 
                cart
                className="btn text-uppercase mb-3" 
                type="button"
                onClick={() => clearCart()}
              >
                Clear Cart
              </ButtonContainer>
            </Link>
            <div className="total-container">
              <h5>
                <span className="text-title">Subtotal: </span>
                <strong>£{cartSubTotal.toFixed(2)}</strong>
              </h5>
              <h5>
                <span className="text-title">Tax: </span>
                <strong>£{cartTax.toFixed(2)}</strong>
              </h5>
              <h5>
                <span className="text-title">Total: </span>
                <strong>£{cartTotal.toFixed(2)}</strong>
              </h5>
            </div>
            <PayPalButton 
              total={cartTotal} 
              clearCart={clearCart} 
              history={history} 
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
