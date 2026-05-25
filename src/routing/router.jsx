import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";

import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "posts",
                loader: async () => {
                    const response = await fetch(
                        "https://jsonplaceholder.typicode.com/posts"
                    );

                    return response.json();
                },
                element: <Posts />,
            },
            {
                path: "posts/:id",
                element: <PostDetail />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
]);

export default router;