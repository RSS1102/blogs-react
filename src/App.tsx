import { Routes, Route, HashRouter, RouterProvider } from "react-router-dom";
import React from "react";
import router from "@/router";
import ErrorElement from "@/router/config/ErrorRoute";
function App() {
    return (
        <RouterProvider router={router} />
    )
}
export default App;