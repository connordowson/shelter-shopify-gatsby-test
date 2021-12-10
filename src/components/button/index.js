import styled from "styled-components";

const Button = styled.button`
  padding: 0.75em 1.5em;
  background: ${({ theme }) => theme.colors.primaryLink};
  border: none;
  border-radius: 0.25em;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-weight: 400;
  display: inline-flex;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLinkHover};
  }

  :disabled {
    background: ${({ theme }) => theme.colors.disabled};
    cursor: wait;
  }

  svg {
    margin-left: 0.5em;
  }

  ${({ small }) =>
    small &&
    `
      padding: 0.5em 1em;
      font-weight: 900;
      font-size: 0.75em;
  `}
`;

export default Button;
