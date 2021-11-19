import React from "react";
import { ThemeProvider } from "styled-components";
import { StoreProvider } from "./src/context/store-context";
import "normalize.css";
import Layout from "./src/components/Layout";
import theme from "./src/styles/theme";

export const wrapRootElement = ({ element }) => (
  <StoreProvider>
    <ThemeProvider theme={theme}>
      <Layout>{element}</Layout>
    </ThemeProvider>
  </StoreProvider>
);
