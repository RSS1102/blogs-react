import { CreateBlogReq, CreateBlogRes, GetBlogsListRes } from '@/types/blogs';
import http from '../http';
import { AxiosResponse, PagingReq } from '@/types';


/**
 * @description 发布blog -- blog
 */
export const createBlog = (data: CreateBlogReq): Promise<AxiosResponse<CreateBlogRes>> => {
    return http({
        url: '/create_blog',
        method: 'post',
        data
    });
};

/**
 * @description 查询文章列表 -- blog
 */
export const getBlogsList = (data: PagingReq = { current: -1, pageSize: -1 }): Promise<AxiosResponse<GetBlogsListRes>> => {
    return http({
        url: '/select_blog',
        method: 'post',
        data
    });
};