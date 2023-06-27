import { LoginInReq, LoginInRes } from '@/types/login';
import http from '../http';
import { AxiosResponse } from '@/types';

/**
 * @description 用户登陆
 */
export const loginIn = (data: LoginInReq): Promise<AxiosResponse<LoginInRes>> => {
  return http({
    url: '/login_in',
    method: 'post',
    data
  });
};
