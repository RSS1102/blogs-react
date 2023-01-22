import { Button } from "antd";
import React from "react"
import { useNavigate } from "react-router-dom";
import "./index.scss"

const ErrorElement = () => {
    const navigate = useNavigate();
    return (
        <div className="error-element">
            <div>
                <div>Route error! </div>
                <div><Button type="primary" onClick={() => navigate(-1)}>Back Page</Button></div>
            </div>
        </div >
    )
}
export default ErrorElement