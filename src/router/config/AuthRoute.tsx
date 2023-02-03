import App from "@/App"
import Login from "@/pages/login"
import { useAppSelector } from "@/store/hooks"
import React from "react"
import { Navigate, Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
const AuthRoute = () => {
    const isAuth = useAppSelector((state) => state.userReducer.token)
    return isAuth
        ? <App />
        : (
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        )
}
export default AuthRoute