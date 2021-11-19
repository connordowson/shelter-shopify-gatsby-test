import React from "react";
import Navbar from "./navbar";
import SearchProvider from "../context/search-provider";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

const Layout = ({ children }) => {
  return (
    <SearchProvider>
      <Navbar />
      <main>{children}</main>
      <GlobalStyles />
    </SearchProvider>
  );
};

export default Layout;
