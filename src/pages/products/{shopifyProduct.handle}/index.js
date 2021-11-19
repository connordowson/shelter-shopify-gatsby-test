import { graphql } from "gatsby";
import React, { useContext, useState } from "react";

// components
import Button from "../../../components/button";
import Cart from "../../../components/cart";
import { StoreContext } from "../../../context/store-context";
//styles

//styles
import {
  Dropdown,
  ProductImage,
  ProductInfo,
  ProductWrapper,
  ProductPrice,
  CartContainer,
} from "./styles";

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

    console.log(currentVariant);

    if (currentVariant.image !== null) {
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

          <ProductPrice>{`£${priceRangeV2.maxVariantPrice.amount}`}</ProductPrice>

          {console.log(variants)}
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
      <CartContainer>
        <Cart />
      </CartContainer>
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
