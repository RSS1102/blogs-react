/**
 * @description 博客信息
 */
interface BlogField {
    group_id: number;
    title: string;
    content: string;
    visitors: number;
    is_show: boolean;
    create_at: Date;
    update_at: Date
}

// ***********blog***********

/**
 *  @description 创建blog
 *  @type Req
 */
export interface CreateBlogReq {
    group_id: number;
    title: string;
    content: string;
}

/**
 *  @description 创建blog
 *  @type Res
 */
export interface CreateBlogRes {
    data: number
}

/**
 *  @description 获取blogs
 * @description Res
 */
export interface GetBlogsListRes {
    data: number
}