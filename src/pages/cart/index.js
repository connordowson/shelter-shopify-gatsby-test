import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/store-context";
import Button from "../../components/button";
import CartItem from "../../components/cartItem";
import { CartWrapper, CartItemsWrapper } from "../../components/cart/styles";
import { isBrowser } from "../../helpers";

const Cart = () => {
  const {
    checkout: checkoutFromContext,
    loading,
    updateLineItem,
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

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  return (
    <>
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
            <Button fullWidth onClick={handleCheckout} disabled={loading}>
              Checkout
            </Button>
          </CartItemsWrapper>
        )
      ) : (
        <h2>Loading cart...</h2>
      )}

      {/* <pre>{JSON.stringify(checkout, null, 2)}</pre> */}
    </>
  );
};

export default Cart;
