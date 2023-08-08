/**
 * @description 博客信息
 */
interface BlogData {
    id: number;
    key: string;
    groupId: number;
    groupIsShow: boolean;
    title: string;
    content: string;
    visitors: number;
    isShow: boolean;
    createAt: Date;
    updateAt: Date
}

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
    data: BlogData[];
    total: number
}

/**
 *  @description 更新blog
 *  @type Req
 */
export interface UpdateBlogReq extends Partial<GroupData> { }
/**
 *  @description 更新blogs
 * @description Res
 */
export interface UpdateBlogRes {
    data: number
}
