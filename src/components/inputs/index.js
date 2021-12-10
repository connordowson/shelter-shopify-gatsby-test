import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 0.5em;
  margin-right: 0.5em;
  font-weight: 400;
  height: 42px;
  border-radius: 0.25em;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
