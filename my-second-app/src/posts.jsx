export default function Posts({ post }) {
    const { title, body, id } = post;

    return (
        <div className="carde">

            <h3>Post ID : {id}</h3>

            <h3>Post title : {title}</h3>
            <h3>Body : {body}</h3>
        </div>
    )
}