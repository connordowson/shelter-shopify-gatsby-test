import { graphql } from "gatsby";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
// components
import Button from "../../../components/button";
import Cart from "../../../components/cart";
import { StoreContext } from "../../../context/store-context";
//styles

//styles

const ProductWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 2em;
  padding: 2em;
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 2em;
`;

const ProductInfo = styled.div`
  h2,
  p,
  label {
    margin-bottom: 1rem;
  }
`;

const Dropdown = styled.select`
  margin: 1em 0 1em 1em;
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors.lightBackgroundHover};
  background: ${({ theme }) => theme.colors.lightBackground};
  border-radius: 0.5em;
`;

const ProductImage = styled(GatsbyImage)`
  width: 100%;
  height: 230px;
  object-fit: cover;
  object-position: center;
  position: relative;
`;
const ProductPrice = styled.p`
  font-size: 1.2em;
`;

const Product = ({ data }) => {
  const { title, featuredImage, variants, descriptionHtml, priceRangeV2 } =
    data.shopifyProduct;

  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(featuredImage.src);

  const { addVariantToCart, loading } = useContext(StoreContext);

  const addToCart = (e) => {
    e.preventDefault();
    addVariantToCart(selectedVariant.storefrontId, quantity);
  };

  const quantityOptionsToRender = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleFormatChange = (selectedFormat) => {
    const currentVariant = variants.find(
      (variant) => variant.storefrontId === selectedFormat
    );

    if (currentVariant.image !== undefined) {
      setCurrentImage(currentVariant.image.originalSrc);
    }
    setSelectedVariant(currentVariant);
  };

  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}

      <ProductWrapper>
        <ProductImage
          image={featuredImage.gatsbyImageData}
          alt={featuredImage.altText}
        />
        <ProductInfo>
          <h2>{title}</h2>

          <ProductPrice>{`£${parseFloat(
            priceRangeV2.maxVariantPrice.amount
          ).toFixed(2)}`}</ProductPrice>

          {variants.length > 1 ? (
            <label>
              Format:
              <Dropdown onChange={(e) => handleFormatChange(e.target.value)}>
                {variants.map((variant) => (
                  <option value={variant.storefrontId}>
                    {`${variant.title} - £${variant.price}`}
                  </option>
                ))}
              </Dropdown>
            </label>
          ) : null}

          <br />
          <label>
            Quantity:
            <Dropdown
              onChange={(e) => {
                e.preventDefault();
                setQuantity(e.target.value);
              }}
            >
              {quantityOptionsToRender.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </Dropdown>
          </label>
          <br />
          {/* <p>{`Sub-total: £${selectedVariant.price * quantity}`}</p>
          <br /> */}
          <Button onClick={addToCart} disabled={loading}>
            {!loading ? `Add to cart` : `Adding to cart...`}
          </Button>
          <div dangerouslySetInnerHTML={{ __html: descriptionHtml }}></div>
        </ProductInfo>
      </ProductWrapper>
    </>
  );
};

export const pageQuery = graphql`
  query ProductPageQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      handle
      featuredImage {
        gatsbyImageData(width: 350, height: 230)
        altText
      }
      descriptionHtml
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
      }
      variants {
        storefrontId
        title
        price
      }
    }
  }
`;

export default Product;
