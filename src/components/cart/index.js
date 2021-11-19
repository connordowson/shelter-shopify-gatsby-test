import React, { useContext } from "react";
import { StoreContext } from "../../context/store-context";
import Button from "../../components/button";

const Cart = () => {
  const { checkout, loading } = useContext(StoreContext);
  const isCartEmpty = checkout.lineItems.length === 0;

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  return (
    <>
      {isCartEmpty ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <h2>Your cart:</h2>
          <ul>
            {checkout.lineItems.map((item) => (
              <li>
                {`${item.quantity} X ${item.title} - £${(
                  item.variant.priceV2.amount * item.quantity
                ).toFixed(2)}`}
              </li>
            ))}
          </ul>
          <h3> {`Total price: £${checkout?.totalPriceV2?.amount}`}</h3>
          <Button onClick={handleCheckout}>Check out</Button>
        </>
      )}

      {/* <pre>{JSON.stringify(checkout, null, 2)}</pre> */}
    </>
  );
};

export default Cart;
