import * as React from "react";
import { createClient, Provider } from "urql";

const client = createClient({
  url: `https://${process.env.GATSBY_SHOPIFY_STORE_URL}/api/2021-01/graphql.json`,
  fetchOptions: {
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
  },
});

const SearchProvider = ({ children }) => (
  <Provider value={client}>{children}</Provider>
);

export default SearchProvider;
