
import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/login";
import Article from "@/pages/WriteArticle";
import Classify from "@/pages/Classify";
import Home from "@/pages/Home";
import Manage from "@/pages/Manage";
import ErrorElement from "./config/ErrorRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <ErrorElement />,

    },
    {
        path: "/login",
        element: <Login />,
    }, {
        path: "/admin",
        element: <Home />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/article",
                element: <Article />,
            },
            {
                path: "/classify",
                element: <Classify />,
            },
            {
                path: "/manage",
                element: <Manage />,
            },

        ]
    }
])

export default router;