import styled from 'styled-components';

export const ButtonContainer = styled.button`
  margin: 0.2rem 0.5rem 0.2rem 0;
  padding: 0.2rem 0.5rem;
  background: ${props => props.cart ? "var(--ws-red)" : "var(--ws-black)"};
  color: var(--ws-white);
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background: ${props => props.cart ? "var(--ws-red-hover)" : "var(--ws-red)"};
    color: var(--ws-white);
  }

  &:focus {
    outline: none;
  }
`;