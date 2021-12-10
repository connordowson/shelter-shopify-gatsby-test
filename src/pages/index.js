import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Grid from "../components/Grid";
import Cart from "../components/cart";
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
          // <div>
          //   <h2>
          //     <Link to={`/products/${product.handle}`}>{product.title}</Link>
          //   </h2>
          //   <GatsbyImage
          //     image={product.images[0].gatsbyImageData}
          //     alt={product.images[0].altText}
          //   />
          //   <p>{`£${product.priceRangeV2.maxVariantPrice.amount}`}</p>
          // </div>
        ))}
      </Grid>
      <Cart />
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
