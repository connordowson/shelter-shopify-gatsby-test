import styled from "styled-components";
import Button from "../button";

export const CartWrapper = styled.aside`
<<<<<<< HEAD
  position: fixed;
  padding: 2em;
  width: 25%;
  /* height: calc(100%); */
  height: calc(100vh - 112px);
  right: 0;
  top: 112px;
=======
  position: absolute;
  padding: 2em;
  width: 25%;
  height: calc(100vh - 112px);
  /* min-height: calc(100vh - 144px); */
  right: 0;
  top: 0;
>>>>>>> 6bc94625ef3a99729780700f17a7bc1ce4e4337d
  z-index: 5;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 2px 5px #999;
  overflow-y: auto;
`;

export const CartItemsWrapper = styled.div`
  h2 {
    padding-bottom: 0.5em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightBackgroundHover};
  }

  ul {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightBackgroundHover};
    gap: 1.5em;
    display: flex;
    flex-direction: column;
    padding: 1em 0;

    li {
      list-style-type: none;
    }
  }

  > div {
    margin: 1em 0;
    /* font-weight: 700; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 1.25em;

      :last-of-type {
        font-weight: 700;
      }
    }
  }
`;

export const CartItemStyles = styled.li`
  display: flex;
  gap: 1em;
  justify-content: space-between;

  h3,
  p {
    margin: 0;
  }
`;

export const CartItemImage = styled.img`
  height: 100px;
  width: 100px;
  border: 1px solid ${({ theme }) => theme.colors.lightBackgroundHover};
  background: ${({ theme }) => theme.colors.lightBackground};
  border-radius: 1em;
  padding: 0.5em;
`;

export const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;

  > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const CartItemQuantity = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  flex: 0;
  height: 32px;

  span {
    padding: 0.1rem 1rem;
    border-left: none;
    border-right: none;
    border-top: 1px solid ${({ theme }) => theme.colors.lightBackgroundHover};
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightBackgroundHover};
    height: 100%;
  }
`;

export const ItemQuantityButton = styled(Button)`
  margin: 0;
  height: 100%;

  :first-of-type {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  :last-of-type {
    border-radius: 0 0.25rem 0.25rem 0;
  }
`;
