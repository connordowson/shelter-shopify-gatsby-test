import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const ProductWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 2em;
  padding: 2em;
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 2em;
`;
export const ProductInfo = styled.div`
  h2,
  p,
  label {
    margin-bottom: 1rem;
  }
`;

export const Title = styled.div`
  width: fit-content;

  h2 {
    font-family: "Playfair Display";
    font-weight: 800;
    font-size: 4.5em;
    margin-top: 0;
  }
`;

export const Dropdown = styled.select`
  margin: 1em 0 1em 1em;
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors.lightBackground};
  background: ${({ theme }) => theme.colors.lightBackground};
  border-radius: 0.5em;
`;

export const ProductImage = styled(GatsbyImage)`
  width: 100%;
  height: 230px;
  object-fit: cover;
  object-position: center;
  position: relative;
`;
export const ProductPrice = styled.p`
  font-size: 1.2em;
`;

export const CartContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 2em;
  padding: 2em;
`;
