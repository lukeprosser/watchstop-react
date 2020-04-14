import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block mt-3 font-weight-bold">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-title">Product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-title">Name</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-title">Price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-title">Quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-title">Remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-title">Total</p>
        </div>
      </div>
    </div>
  )
}
