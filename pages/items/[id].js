//dyanmic route
import { useRouter } from "next/router"
//allows us to access the query parameters from the url
import Head from 'next/head'

export default function Car({ item }) {
    const router = useRouter()
    const { id } = router.query

    //seo friendly title & meta tags to the head of the document 
    return (<>
        <Head>
            <title>{item.id}</title>
        </Head>
        <h2>Category: {id}</h2>
        <h1>{item.id}</h1>
        <p>Price: ${item.price}</p>
        <img src={item.image} />
    </>
    )
}

//Server-side Rendering

export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props : { item: data }
    }
}

//Static Site Generation

//tells next to prerender page
//fetch the json for an individual item so it can be used in the html
// export async function getStaticProps({ params }) {

//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props : { item: data }
//     }
// }

// //tells next which dynamic pages to render
// //can request data from an api or database
// //then it returns a path object that contains an array with every route for this dynamic url
// export async function getStaticPaths() {
//     const req = await fetch('http://localhost:3000/items.json');
//     const data = await req.json();

//     const paths = data.map(item => {
//         return {params: { id: item } }
//     })

//     return {
//         paths,
//         fallback:false
//     }
// }