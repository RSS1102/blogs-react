1. ##### redux在外部使用(在axios内使用redux):

  在redux中声明好store,直接导入store。  
```ts
import { changeUser } from '@/store/model/user';

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
    error => Promise.reject(error),
)

/**
 * @description 添加响应拦截器
 * @description 获取token
 */
http.interceptors.response.use(
    response => {

        if (response.data.token) {
            store.dispatch(changeUser({ token: response.data.token }));
        }
        return response.data
    },
    error => Promise.reject(error)
    )
```