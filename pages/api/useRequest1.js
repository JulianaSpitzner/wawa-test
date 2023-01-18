import useSWR from 'swr'

export const useGetData = () => {
  const { data, error, isLoading } = useSWR('.C:/Users/julspitz/wawa-test/data.json', fetcher)
  console.log("HERE", data);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  // render data
  return { data, error }
}