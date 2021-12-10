// from here https://github.com/gatsbyjs/gatsby-starter-shopify/blob/main/src/context/store-context.jsx

import React, { useState, useEffect, createContext } from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_STORE_URL,
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

const defaultValues = {
  cart: [],
  // isOpen: false,
  isOpen: true,
  loading: false,
  onOpen: () => {},
  onClose: () => {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
  client,
  checkout: {
    lineItems: [],
  },
};

export const StoreContext = createContext(defaultValues);

const isBrowser = typeof window !== `undefined`;
const localStorageKey = `shopify_checkout_id`;

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(defaultValues.isOpen);

  const setCheckoutItem = (checkout) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id);
    }

    setCheckout(checkout);
  };

  useEffect(() => {
    const initialiseCheckout = async () => {
      const exisitingCheckoutID = isBrowser
        ? localStorage.getItem(localStorageKey)
        : null;

      if (exisitingCheckoutID && exisitingCheckoutID !== `null`) {
        try {
          const existingCheckout = await client.checkout.fetch(
            exisitingCheckoutID
          );

          if (!exisitingCheckoutID.completedAt) {
            setCheckoutItem(existingCheckout);
            return;
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, null);
        }
      }

      const newCheckout = await client.checkout.create();
      setCheckoutItem(newCheckout);
    };

    initialiseCheckout();
  }, []);

  const addVariantToCart = (variantId, quantity) => {
    setLoading(true);

    const checkoutID = checkout.id;

    const lineItemsToUpdate = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    client.checkout
      .addLineItems(checkoutID, lineItemsToUpdate)
      .then((checkout) => {
        setCheckout(checkout);
        const cartChannel = new BroadcastChannel("cart_channel");
        cartChannel.postMessage(JSON.stringify(checkout));
        setLoading(false);
      });
  };

  const updateLineItem = (checkoutID, lineItemID, quantity) => {
    setLoading(true);

    const lineItemToUpdate = [
      {
        id: lineItemID,
        quantity: parseInt(quantity, 10),
      },
    ];

    return client.checkout
      .updateLineItems(checkoutID, lineItemToUpdate)
      .then((checkout) => {
        setCheckout(checkout);
        const cartChannel = new BroadcastChannel("cart_channel");
        cartChannel.postMessage(JSON.stringify(checkout));
        setLoading(false);
      });
  };

  const toggleCart = () => setIsOpen((isOpen) => !isOpen);

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addVariantToCart,
        updateLineItem,
        checkout,
        loading,
        isOpen,
        toggleCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
