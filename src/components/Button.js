import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: uppercase;
  font-size: 1.4rem;
  background: ${props => props.cart ? "red" : "var(--cd-dark)"};
  border: none;
  color: var(--cd-white);
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--cd-secondary);
  }

  &:focus {
    outline: none;
  }
`;