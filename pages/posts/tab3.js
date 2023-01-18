import { useGetPosts } from "../api/useRequest"
import { useGetPostsGraph } from "../api/graphql"
// import { useGetData } from "./useRequest1"
import Post from "../../components/Post"
// import Item from "./components/Item"
// import Profile from "./useRequest1"
import { GraphQlHeader } from "../api/graphql-"

export default function IndexPage() {
  // const { posts, error } = useGetPostsGraph("/posts")
  const { posts, error } = useGetPosts("/posts")
//   const f = Profile()
  // console.log(error, "jules");
  if (error) return <h1>Something went wrong!</h1>
  if (!posts) return <h1>Loading...</h1>

  return (
    <div className="container">
    {/* {posts.map(post => (
      <Item data={data} />
    ))} */}
    
    {/* <Profile /> */}
      {/* <h1>Graph Posts</h1> */}
      {/* <GraphQlHeader /> */}
      <h1>My Posts</h1>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}