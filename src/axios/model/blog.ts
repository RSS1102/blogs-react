import { GroupListRes, createGroupReq, createGroupRes } from '@/types/blog';
import http from '../http';
import { LoginInReq, LoginInRes } from '@/types/login';
import { AxiosResponse, PagingReq } from '@/types';

/**
 * @description 用户登陆
 */
export const loginIn = (data: LoginInReq): Promise<AxiosResponse<LoginInRes>> => {
    console.log(data)
    return http({
        url: '/login_in',
        method: 'post',
        data
    });
};

/**
 * @description 初始化分组
 */
export const createGroup = (data: createGroupReq): Promise<AxiosResponse<createGroupRes>> => {
    return http({
        url: '/create_group',
        method: 'post',
        data
    });
};

/**
 * @description 获取分组列表
 */
export const getGroupList = (data: PagingReq = { current: 1, pageSize: 10 }): Promise<AxiosResponse<GroupListRes>> => {
    return http({
        url: '/select_group',
        method: 'post',
        data
    });
};