import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">
                      <h5 className="mb-4">Item added to the cart</h5>
                      <img src={img} className="img-fluid mb-4" alt="Product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: £{price}</h5>
                      <div className="mt-4">
                        <Link to="/">
                          <ButtonContainer className="my-2" onClick={() => closeModal()}>
                            Return
                          </ButtonContainer>
                        </Link>
                        <Link to="/cart">
                          <ButtonContainer cart className="my-2" onClick={() => closeModal()}>
                            Go To Cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            )
          }
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--ws-white);
  }
`;