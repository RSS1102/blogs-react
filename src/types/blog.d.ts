/**
 * @description 创建分组
 */
export type createGroupReq = {
    group: string
}
/**
 * @description 创建分组回执
 */
export type createGroupRes = {
    data: {
        id: number,
        group: string
    }
}

/**
 * @description 分组列表
 */
export type GroupData = {
    key: string;
    id: string;
    group: string;
    pageNumber: number;
    isShow: boolean;
}

/**
 * @description 获取分组列表
 */
export interface GroupListRes {
    data: GroupData[];
    total: number
}