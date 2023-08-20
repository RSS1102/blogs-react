import { CreateBlogReq, CreateBlogRes, GetBlogsListRes, GetBlogsRes, UpdateBlogReq, UpdateBlogRes } from '@/types/blogs';
import http from '../http';
import { AxiosResponse, PagingReq } from '@/types';


/**
 * @description 发布blog -- id
 */
export const createBlog = (data: CreateBlogReq): Promise<AxiosResponse<CreateBlogRes>> => {
    return http({
        url: '/create_blog',
        method: 'post',
        data
    });
};

/**
 * @description 查询文章列表 -- []
 */
export const getBlogsList = (data: PagingReq = { current: -1, pageSize: -1 }): Promise<AxiosResponse<GetBlogsListRes>> => {
    return http({
        url: '/select_blog_limit',
        method: 'post',
        data
    });
};

/**
 * @description 查询文章 -- {}
 */
export const getBlogs = (data: { id: number }): Promise<AxiosResponse<GetBlogsRes>> => {
    return http({
        url: '/select_blog',
        method: 'post',
        data
    });
};

/**
 * @description 更新分组列表 -- id
 */
export const updateBlog = (data: UpdateBlogReq): Promise<AxiosResponse<UpdateBlogRes>> => {
    return http({
        url: '/update_blog',
        method: 'post',
        data
    });
};