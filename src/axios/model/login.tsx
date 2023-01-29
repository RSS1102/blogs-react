import { LoginReqType, LoginResType } from '@/types/login';
import http from '../http';


/**
 * @description 用户登陆
 * @param LoginReqType 
 * @returns LoginResType
 */
export const OnLogin = (data: LoginReqType): Promise<LoginResType> => {
    console.log(data)
    return http({
        url: '/login',
        method: 'post',
        data
    });
};

export const hello = (): Promise<LoginResType> => {
    return http({
        url: 'hello',
        method: 'get',
    });
};