import { use } from "react"
import Posts from "./posts";
export default function Post({ postPromise }) {
    const posts = use(postPromise);
    console.log(posts);

    return (
        <div className="carde">
            <h4>Post : {posts.length}</h4>
            {
                posts.map(post => <Posts key={post.id} post={post}></Posts>)
            }
        </div>
    )
}