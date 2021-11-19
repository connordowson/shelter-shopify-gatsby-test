import React from "react";
import Layout from "../components/Layout";
import SearchProvider from "../context/search-provider";
import { useQuery } from "urql";

const ProductsQuery = `
{
	products(first: 10)
  {
    edges{
      node{
        title
        images(first: 10){
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
  const [{ fetching, data, error }] = useQuery({
    query: ProductsQuery,
  });

  return (
    <Layout>
      {console.log(error)}
      <ul>
        <li>fetching: {fetching.toString()}</li>

        <li>error: {error && <p>{error.message}</p>}</li>
        <li>{`https://${process.env.GATSBY_SHOPIFY_STORE_URL}/api/graphql.json`}</li>
      </ul>
      {/* <pre>
        {data &&
          JSON.stringify(
            data.products.edges.map((product) => product.node),
            null,
            2
          )}
      </pre> */}

      {data &&
        data.products.edges.map((product, index) => (
          <div>
            <h2>{product.node.title}</h2>
            <img
              src={product.node.images.edges[0].node.originalSrc}
              height="200px"
            />
          </div>
        ))}
    </Layout>
  );
};

export default Search;
