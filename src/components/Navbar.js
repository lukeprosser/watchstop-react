import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <div className="container">
          <ul className="navbar-nav align-items-center">
            <li>
              <Link to="/" className="navbar-brand text-uppercase">
                WatchStop
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              Cart
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--ws-black);

  .nav-link {
    color: var(--ws-white) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;