
/**
 * @description 分组列表
 */
export interface GroupData  {
    key: string;
    id: string;
    group: string;
    pageNumber: number;
    isShow: boolean;
}

/**
 * @description 创建分组
 */
export interface CreateGroupReq {
    group: string
}
/**
 * @description 创建分组
 */
export interface CreateGroupRes  {
    data: number
}

/**
 * @description 查询分组列表
 */
export interface GetGroupListRes {
    data: GroupData[];
    total: number
}
interface BlogField {
    group_id: number;
    title: string;
    content: string;
    visitors: number;
    is_show: boolean;
    create_at: Date;
    update_at: Date
}
/**
 * @description 更新分组
 */
export interface UpdateGroupReq {
    id: number,
    field: Partial<FieldBlog>
}
/**
 * @description 更新分组
 */
export interface UpdateGroupRes {
    data: number
}