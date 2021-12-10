import styled from "styled-components";

export const NavbarStyles = styled.nav`
  width: 100%;
  padding: 1em 4em;
  background: ${({ theme }) => theme.colors.brand};
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;

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
      display: inline-flex;

      svg {
        margin-left: 0.5em;
      }

      a {
        display: inline-flex;
        align-items: center;

        font-size: 1.1em;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
