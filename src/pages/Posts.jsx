import { Link } from "react-router-dom";

import useFetch from "../hooks/useFetch";

function Posts() {

    const {
        data: posts,
        loading,
        error
    } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );


    if (loading) {

        return <h1>Loading...</h1>;

    }


    if (error) {

        return <h1>Errore</h1>;

    }


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