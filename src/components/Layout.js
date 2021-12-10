import React from "react";
import Helmet from "react-helmet";
import Navbar from "./navbar";
import SearchProvider from "../context/search-provider";
import GlobalStyles from "../styles/global";

const Layout = ({ children }) => {
  return (
    <SearchProvider>
      <Navbar />
      <Helmet>
        <title>Shelter Shop</title>
      </Helmet>
      <main
        style={{
          position: "relative",
          padding: "2em",
        }}
      >
        {children}
      </main>
      <GlobalStyles />
    </SearchProvider>
  );
};

export default Layout;
