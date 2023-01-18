import { GraphQLClient } from 'graphql-request'
import useSWR, { SWRConfig } from "swr"

export const client = new GraphQLClient("https://jsonplaceholder.typicode.com/posts");

const fetcher = (query, variables) => client.request(query, variables);

export const CartFragment = /* GraphQL */ 
`fragment Cart {
    id
    title
    body
  }`;

export const GetCartById = /* GraphQL */ 
`query GetCartById($id: ID) {
    cart(id: $id) {
      id
      title
      body
    }
  }
  ${CartFragment}`;

export const GraphQlHeader = () => {
  const cartId = "1";
  const { data, error } = useSWR< {cart: {id: String}}>([GetCartById, {
    id: cartId
  }], fetcher)

  console.log(error, "jules");

  const loading = !error && !data;

  return (
    <>
    <SWRConfig value={{fetcher}}>
      <h3>graph stuff</h3>
      <p>{data}</p>
      <p>{loading ? "loading" : <>Total: {data}</>}</p>
    </SWRConfig>
    </>
  );
}


// const baseUrl = "https://jsonplaceholder.typicode.com"

// export const useGetPostsGraph = path => {
//   const url = baseUrl + path

//   const fetcher = query => request(url, query)

//   const { data: posts, error } = useSWR(
//     `post{
//       id
//       title
//       body
//     }`,
//     fetcher
//   )

//   return { posts, error }
// }
