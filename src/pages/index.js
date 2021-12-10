import React from "react";
import { graphql } from "gatsby";

import Grid from "../components/Grid";
import ProductCard from "../components/productCard";

export default function Home({ data }) {
  const homepageCollection = data.shopifyCollection;

  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      <h2>Christmas cards</h2>
      <Grid columns="repeat(4, 1fr)" gap="2em">
        {homepageCollection.products.map((product) => (
          <ProductCard product={product} source="gatsby" />
        ))}
      </Grid>
    </>
  );
}

export const query = graphql`
  query shopifyCollection {
    shopifyCollection(title: { eq: "Christmas Cards" }) {
      id
      products(limit: 8) {
        title
        handle
        images {
          gatsbyImageData(width: 400, height: 200)
          altText
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
      }
    }
  }
`;
