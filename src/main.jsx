import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.css";

import { RouterProvider } from "react-router-dom";

import router from "./routing/router.jsx";

import { AuthProvider } from "./context/AuthContext";


ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <AuthProvider>

            <RouterProvider router={router} />

        </AuthProvider>

    </React.StrictMode>

);