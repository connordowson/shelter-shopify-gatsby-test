import React from "react";
import { Link } from "gatsby";
import { ProductCardWrapper, ProductImage, ProductGatsbyImage } from "./styles";

const ProductCard = ({ product, source }) => {
  const { title, handle, images, priceRange, priceRangeV2 } = product;

  const getPrice = () => {
    const minPrice =
      source === "gatsby"
        ? priceRangeV2.minVariantPrice.amount
        : priceRange.minVariantPrice.amount;
    const maxPrice =
      source === "gatsby"
        ? priceRangeV2.maxVariantPrice.amount
        : priceRange.maxVariantPrice.amount;
    // const maxPrice = priceRange.maxVariantPrice.amount;

    if (maxPrice === minPrice) {
      return `£${parseFloat(maxPrice).toFixed(2)}`;
    } else {
      return `From £${parseFloat(minPrice).toFixed(2)} - £${parseFloat(
        maxPrice
      ).toFixed(2)}`;
    }
  };

  return (
    <ProductCardWrapper>
      {source === "search" && (
        <ProductImage src={images.edges[0].node.originalSrc} height="200px" />
      )}
      {source === "gatsby" && (
        <ProductGatsbyImage
          image={product.images[0].gatsbyImageData}
          alt={product.images[0].altText}
          imgStyle={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      )}

      <h2>
        <Link to={`/products/${handle}`}>{title}</Link>
      </h2>
      <p>{getPrice()}</p>
    </ProductCardWrapper>
  );
};

export default ProductCard;
