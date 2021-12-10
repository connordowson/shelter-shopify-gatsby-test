import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/store-context";
import { CartWrapper, CartItemsWrapper } from "./styles";
import CartItem from "../cartItem";
import Button from "../button";
import { isBrowser } from "../../helpers";

const Cart = () => {
  const {
    checkout: checkoutFromContext,
    loading,
    isOpen,
    // toggleCart,
  } = useContext(StoreContext);

  const [checkout, setCheckout] = useState(checkoutFromContext);

  if (isBrowser) {
    const cartChannel = new BroadcastChannel("cart_channel");
    cartChannel.onmessage = (e) => {
      setCheckout(JSON.parse(e.data));
    };
  }

  useEffect(() => {
    setCheckout(checkoutFromContext);
  }, [checkoutFromContext]);

  const handleCheckout = (e) => {
    e.preventDefault();
    window.open(checkout.webUrl);
  };

  return isOpen ? (
    <CartWrapper>
      {checkout.id ? (
        checkout?.lineItems.length === 0 ? (
          <h2>Your cart is empty!</h2>
        ) : (
          <CartItemsWrapper>
            <h2>Your cart</h2>
            <ul>
              {checkout.lineItems.map((item) => (
                <CartItem item={item} />
              ))}
            </ul>
            <div>
              <span>Total: </span>
              <span>
                {`£${parseFloat(checkout?.totalPriceV2?.amount).toFixed(2)}`}
              </span>
            </div>
            <Button onClick={handleCheckout} disabled={loading}>
              Checkout
            </Button>
          </CartItemsWrapper>
        )
      ) : (
        <h2>Loading cart...</h2>
      )}

      {/* <pre>{JSON.stringify(checkout, null, 2)}</pre> */}
    </CartWrapper>
  ) : null;
};

export default Cart;
