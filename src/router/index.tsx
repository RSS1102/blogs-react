
import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/layout";
import Login from "@/pages/login";
import Article from "@/pages/WriteArticle";
import Classify from "@/pages/Classify";
import Manage from "@/pages/Manage";
import ErrorElement from "./config/ErrorRoute";
import Home from "@/pages/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <ErrorElement />,

    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/blogs",
        element: <Layout />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
        ]
    }
])

export default router;