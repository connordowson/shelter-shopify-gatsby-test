import styled from "styled-components";

export const NavbarStyles = styled.nav`
  width: 100%;
  padding: 1em 4em;
  background: ${({ theme }) => theme.colors.brand};
  display: flex;
  justify-content: space-between;
<<<<<<< HEAD
  position: sticky;
  top: 0;
  z-index: 10;
=======
>>>>>>> 6bc94625ef3a99729780700f17a7bc1ce4e4337d

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
