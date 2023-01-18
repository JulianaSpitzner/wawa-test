import useSWR from 'swr'

export const useGetData = () => {
  const { data, error, isLoading } = useSWR('.C:/Users/julspitz/wawa-test/data.json', fetcher)
  console.log("HERE", data);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  // render data
  return { data, error }
}


// import useSWR from "swr"

// const fetcher = url => fetch(url).then(res => res.json())
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '316874c9d5msh9069b229be34fd5p1213dajsn6ff0ced039f3',
// 		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
// 	}
// };

// export const useGetList = () => {
//   const { data: error } = useSWR("https://themealdb.p.rapidapi.com/list.php?i=list", fetcher, options)
//   // const { data, error, isLoading } = useSWR("https://themealdb.p.rapidapi.com/list.php?i=list", fetcher, options)
//   console.log(data)

//   if (error) return <div>failed to load</div>
//   // if (isLoading) return <div>loading...</div>

//   return {data}
// }


// fetch('https://themealdb.p.rapidapi.com/filter.php?i=chicken_breast', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
