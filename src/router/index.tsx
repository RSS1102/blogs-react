
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout";
import Login from "@/pages/login";
import WriteArticle from "@/pages/writeArticle";
import BlogManage from "@/pages/blogManage";
import ErrorElement from "./config/ErrorRoute";
import GroupManage from "@/pages/groupManage";
import Home from "@/pages/home";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "publishArticle",
                element: <WriteArticle />,
            },
            {
                path: "groupManage",
                element: <GroupManage />,
            },
            {
                path: "blogManage",
                element: <BlogManage />,
            },
        ]
    }
])

export default router;