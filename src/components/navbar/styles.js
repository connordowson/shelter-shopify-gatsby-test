import styled from "styled-components";

export const NavbarStyles = styled.nav`
  width: 100%;
  padding: 1em 4em;
  background: ${({ theme }) => theme.colors.brand};
  display: flex;
  justify-content: space-between;

  h1 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
  }

  ul {
    width: 40%;
    /* align-self: flex-end; */
    justify-self: flex-end;
    display: flex;
    justify-content: space-between;

    li {
      display: inline;
      align-self: center;

      a {
        font-size: 1.1em;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
