import { request } from 'graphql-request'
import useSWR from "swr"

const baseUrl = "https://jsonplaceholder.typicode.com"

export const useGetPostsGraph = path => {
  const url = baseUrl + path

  const fetcher = query => request(url, query)

  const { data: posts, error } = useSWR(
    `post{
      id
      title
      body
    }`,
    fetcher
  )

  return { posts, error }
}
