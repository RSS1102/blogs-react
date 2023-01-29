import { Routes, Route, HashRouter, RouterProvider } from "react-router-dom";
import React from "react";
import router from "@/router";
import store from "./store";
import { Provider } from 'react-redux';
function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    )
}
export default App;