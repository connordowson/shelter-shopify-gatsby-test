import React from "react";
import Helmet from "react-helmet";
import Navbar from "./navbar";
import Cart from "./cart";

import SearchProvider from "../context/search-provider";
import GlobalStyles from "../styles/global";

const Layout = ({ children }) => {
  return (
    <SearchProvider>
      <Navbar />
      <Helmet>
        <title>Shelter Shop</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="./shelter_favicon.png"
        />
      </Helmet>
      <main
        style={{
          position: "relative",
          padding: "2em",
        }}
      >
        <Cart />
        {children}
      </main>
      <GlobalStyles />
    </SearchProvider>
  );
};

export default Layout;
