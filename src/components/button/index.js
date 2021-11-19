import styled from "styled-components";

const Button = styled.button`
  padding: 0.75em 1.5em;
  background: ${({ theme }) => theme.colors.primaryLink};
  border: none;
  border-radius: 0.25em;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-weight: 400;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLinkHover};
  }

  :disabled {
    background: ${({ theme }) => theme.colors.disabled};
    cursor: wait;
  }
`;

export default Button;
