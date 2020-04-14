import React from 'react';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row cart-row my-4 text-capitalize text-center">
      <div className="col-10 mx-auto mb-2 col-lg-2 cart-image">
        <img src={img} style={{width: '5rem'}} className="img-fluid" alt="Product" />
      </div>
      <div className="col-10 mx-auto mb-1 col-lg-2">
        <span className="d-lg-none">Product: </span>{title}
      </div>
      <div className="col-10 mx-auto mb-1 col-lg-2">
        <span className="d-lg-none">Price: </span>£{price}
      </div>
      <div className="col-10 mx-auto mb-1 col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn btn-qty mx-1" onClick={() => decrement(id)}>-</span>
          <span className="qty mx-1">{count}</span>
          <span className="btn btn-qty mx-1" onClick={() => increment(id)}>+</span>
        </div>
      </div>
      <div className="col-10 mx-auto mb-1 col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>£{total}</strong>
      </div>
    </div>
  )
}
