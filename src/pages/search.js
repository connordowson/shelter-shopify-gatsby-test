import React, { useState, useEffect } from "react";
import { useQuery } from "urql";
import Button from "../components/button";
import Grid from "../components/Grid";
import ProductCard from "../components/productCard";
import { SearchInput } from "../components/inputs";
import { FaSearch } from "react-icons/fa";

const ProductsQuery = `
query searchQuery($searchQuery: String){
	products(first: 20, query: $searchQuery)
  {
    edges{
      node{
        title
        handle
        priceRange{
          maxVariantPrice{
            amount
          }
          minVariantPrice{
            amount
          }
        }
        images(first: 1){
          edges{
            node{
              originalSrc
            }
          }
        }
      }
    }
  }
  
  shop{
    name
  }
}
`;

const Search = () => {
  const [pauseQuery, setPauseQuery] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [{ fetching, data, error }] = useQuery({
    query: ProductsQuery,
    pause: pauseQuery,
    variables: {
      searchQuery,
    },
  });

  useEffect(() => {
    setPauseQuery(true);
  }, [data]);

  useEffect(() => {
    fetching === false && setPauseQuery(true);
  }, [fetching]);

  return (
    <>
      <h1>Search</h1>

      <form
        style={{
          marginBottom: "2em",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setPauseQuery(false);
        }}
      >
        <SearchInput
          type="search"
          name="search-input"
          id="search-input"
          placeholder="Search"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <Button onClick={() => setPauseQuery(false)} type="submit">
          Search
          <FaSearch />
        </Button>
      </form>

      {!fetching ? (
        <Grid columns="repeat(5, 1fr)" gap="2em">
          {data &&
            data.products.edges.map(({ node: product }) => (
              <ProductCard product={product} source="search" />
            ))}
        </Grid>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Search;
