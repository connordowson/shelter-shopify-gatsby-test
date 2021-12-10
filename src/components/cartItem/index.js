import React, { useContext } from "react";
import { Link } from "gatsby";
import { StoreContext } from "../../context/store-context";
import {
  CartItemStyles,
  CartItemInfo,
  CartItemImage,
  CartItemQuantity,
  ItemQuantityButton,
} from "../cart/styles";
import Button from "../button";

const CartItem = ({ item }) => {
  const { checkout, loading, updateLineItem } = useContext(StoreContext);

  const { title, quantity, variant } = item;

  console.log(variant.product.handle);

  return (
    <CartItemStyles>
      <div>
        <CartItemImage src={variant.image.src} />
      </div>

      <CartItemInfo>
        <div>
          <h3>
            <Link to={`/products/${variant.product.handle}`}>{title}</Link>
          </h3>
          <p>{`£${parseFloat(
            item.variant.priceV2.amount * item.quantity
          ).toFixed(2)}`}</p>
        </div>
        {variant.title !== "Default Title" && <p>{variant.title}</p>}
        <CartItemQuantity>
          <ItemQuantityButton
            small
            onClick={() => updateLineItem(checkout.id, item.id, quantity - 1)}
            disabled={loading}
          >
            -
          </ItemQuantityButton>

          <span>{quantity}</span>
          <ItemQuantityButton
            small
            onClick={() => updateLineItem(checkout.id, item.id, quantity + 1)}
            disabled={loading}
          >
            +
          </ItemQuantityButton>
        </CartItemQuantity>
      </CartItemInfo>
    </CartItemStyles>
  );
};

export default CartItem;
