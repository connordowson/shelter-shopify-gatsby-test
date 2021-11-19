import React from "react";
import Navbar from "./navbar";
import SearchProvider from "../context/search-provider";

const Layout = ({ children }) => {
  return (
    <SearchProvider>
      <Navbar />
      <main>{children}</main>
    </SearchProvider>
  );
};

export default Layout;
