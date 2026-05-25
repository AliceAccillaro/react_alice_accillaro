import {
    useLoaderData,
    Link
} from "react-router-dom";


function Posts() {

    const posts = useLoaderData();


    return (

        <div className="page">

            <h1>Posts</h1>

            <ul className="posts-list">

                {
                    posts.map((post) => (

                        <li key={post.id}>

                            <Link to={`/posts/${post.id}`}>

                                {post.title}

                            </Link>

                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default Posts;