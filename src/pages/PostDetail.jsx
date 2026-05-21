import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function PostDetail() {

    const { id } = useParams();

    const [post, setPost] = useState(null);


    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

            .then((response) => response.json())

            .then((data) => setPost(data));

    }, [id]);


    if (!post) {

        return <p>Caricamento...</p>;

    }


    return (

        <div className="page">

            <h1>{post.title}</h1>

            <p>{post.body}</p>

        </div>

    );

}

export default PostDetail;