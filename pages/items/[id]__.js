const fetcher = (...args) => fetch(...args).then(res => res.json())

import useSWR from 'swr'
import Head from 'next/head'
import drink from "../../public/drink.json"

function useItem (id) {
  // console.log(drink);
  const url = "http://localhost:3000/items/" + {id}.id
  console.log('URL', url);
  const { data, error, isLoading } = useSWR("http://localhost:3000/items/drink.json", fetcher)
  console.log("DATA", error)

  return {
    item: data,
    isLoading,
    isError: error
  }
}

export default function Car({ id }) {
    // const router = useRouter()
    // const { id } = router.query

    const { user, isLoading, isError } = useItem('drink')
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error</p>

    //seo friendly title & meta tags to the head of the document 
    return (<>
        <Head>
            <title>{user.id}</title>
        </Head>
        <h2>Category: {id}</h2>
        <h1>{user.id}</h1>
        <p>Price: ${user.price}</p>
        <img src={user.image} />
    </>
    )
}

// function Avatar ({ id }) {
//     const { user, isLoading, isError } = useUser(id)
  
//     if (isLoading) return <Spinner />
//     if (isError) return <Error />
//     return <img src={user.avatar} />
//   }