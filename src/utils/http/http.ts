import axios from "axios";
// 实例化axios
const http = axios.create({
    baseURL: "/cweb",
    timeout: 5000,
    // 携带凭证
    withCredentials: false

})

// 添加请求拦截器
http.interceptors.request.use(config => {
    // config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
}, error => {
    return Promise.reject(error);
})
// 添加响应拦截器
http.interceptors.response.use(response => {
    //对于AxiosResponse<any, any> 
    //https://github.com/axios/axios/issues/1510
    return response.data;
}, error => {
    return Promise.reject(error);
})
export default http;