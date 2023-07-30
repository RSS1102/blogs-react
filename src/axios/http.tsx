import { message } from 'antd';
import axios from 'axios';
import store from '@/store';
import { setUser } from '@/store/model/user';
const __ENV__ = import.meta.env;


const http = axios.create({
    baseURL: __ENV__.VITE__URL,
    timeout: 5000,
    withCredentials: false,
})

/**
 * @description 添加请求拦截器
 * @description 添加token
 */
http.interceptors.request.use(
    config => {
        const token = store.getState().userReducer.token;
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => Promise.reject(error)
)
/**
 * @description 添加响应拦截器
 * @description 获取token
 */
http.interceptors.response.use(
    response => {

        if (response.data.token) {
            store.dispatch(setUser({ token: response.data.token, username: response.data.data }));
        }
        return response.data;
    },
    error => {
        switch (error.response.status) {
            case 401:
                return message.error('无身份认证,请重新登陆!');
            case 403:
                return message.error('拒绝授权访问!');
            case 404:
                return message.error('无法找到所请求的资源!');
            case 405:
                return message.error('客户端请求中的方法被禁止!');
            case 406:
                return message.error('无法解析服务端返回的内容!');
            case 407:
                return message.error('请使用代理进行授权!');
            case 408:
                return message.error('请求超时!');
            case 410:
                return message.error('请求的资源已经不存在!');
            case 500:
                return message.error('服务端错误!');
            default:
                return Promise.reject(error.response.data);
        }

    }
)

export default http 