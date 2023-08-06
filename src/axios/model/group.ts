import http from '../http';
import { AxiosResponse, PagingReq } from '@/types';
import { CreateGroupReq, CreateGroupRes, GetGroupListRes, UpdateGroupReq, UpdateGroupRes } from '@/types/group';

/**
 * @description 创建分组 -- group
 */
export const createGroup = (data: CreateGroupReq): Promise<AxiosResponse<CreateGroupRes>> => {
  return http({
    url: '/create_group',
    method: 'post',
    data
  });
};

/**
 * @description 查询分组列表 -- group
 */
export const getGroupList = (data: PagingReq = { current: -1, pageSize: -1 }): Promise<AxiosResponse<GetGroupListRes>> => {
  return http({
    url: '/select_group',
    method: 'post',
    data
  });
};

/**
 * @description 更新分组列表 -- group
 */
export const updateGroup= (data: UpdateGroupReq): Promise<AxiosResponse<UpdateGroupRes>> => {
  return http({
    url: '/update_group',
    method: 'post',
    data
  });
};
