import React from 'react';
import { ButtonContainer } from '../Button';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h2 className="mb-5">Cart is empty</h2>
          <Link to="/">
            <ButtonContainer>
              Return To Store
            </ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  )
}
