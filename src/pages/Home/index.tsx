import { useAppDispatch, useAppSelector } from "@/store/hooks"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

const Home = () => {
    const userInfo = useAppSelector(state => state.userReducer)
    useEffect(() => {
        console.log('username',userInfo.username)
    }, [])
    return (
        <>
            <div>用户</div>
            <div>{userInfo.username}</div>
        </>)
}

export default Home