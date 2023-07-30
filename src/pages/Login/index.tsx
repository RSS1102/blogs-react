import { Button, Form, Input, message } from "antd";
import React from "react";
import "./index.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { loginIn } from "@/axios/model/login";
const Login = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    /**
     * @description 用户登陆
     */
    const goLogin = () => { 
        form.validateFields()
            .then(() => {
                const formData = form.getFieldsValue(true)
                loginIn(formData)
                    .then(res => {
                        message.info(res.message)
                        navigate("/home")
                    }).catch(err => {
                        console.log(err)
                        message.error(err.message)
                    })
            })
    };

    const usernameRules = [{
        validator: async (_: any, username: string) => {
            if (!username) {
                return Promise.reject(new Error('请输入账号!'));
            } else if (username.length < 4 || username.length > 12) {
                return Promise.reject(new Error('账号在4-12位'));
            }
        },
    }]

    const passwordRules = [{
            validator: async (_: any, password: string) => {
                if (!password) {
                    return Promise.reject(new Error('请输入密码!'));
                } else if (password.length < 4 || password.length > 12) {
                    return Promise.reject(new Error('账号在4-12位'));
                }
            },
        },
    ]
    return (
        <div className="login-page">
            <div className="login">
                <div className="login-title">

                </div>

                <Form className="login-form" form={form}>
                    <Form.Item className="login-form-title">
                        登陆
                    </Form.Item>
                    <Form.Item label="账号" name="account" rules={usernameRules} >
                        <Input value='root' prefix={<UserOutlined className="site-form-item-icon" />} />
                    </Form.Item>
                    <Form.Item label="密码" name="password" rules={passwordRules}>
                        <Input.Password value='root' prefix={<LockOutlined className="site-form-item-icon" />} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        <Button type="primary" onClick={goLogin} block> 登 陆 </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login