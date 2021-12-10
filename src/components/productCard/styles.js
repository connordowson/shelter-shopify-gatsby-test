import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const ProductCardWrapper = styled.div`
  /* border: 1px solid ${({ theme }) => theme.colors.lightBackgroundHover}; */
  /* background: ${({ theme }) => theme.colors.lightBackground}; */
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border: 1px solid ${({ theme }) => theme.colors.lightBackgroundHover};
  background: ${({ theme }) => theme.colors.lightBackground};
  border-radius: 1em;
  /* padding: 0.5em; */
`;

export const ProductGatsbyImage = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border: 1px solid ${({ theme }) => theme.colors.lightBackgroundHover};
  background: ${({ theme }) => theme.colors.lightBackground};
  border-radius: 1em;
`;
