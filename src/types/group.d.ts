/**
 * @description 分组列表
 */
export interface GroupData {
  key?: string;
  id: number;
  group: string;
  isShow: boolean;
}

/**
 * @description 创建分组
 * @type Req
 */
export interface CreateGroupReq {
  group: string
}

/**
 * @description 创建分组
 * @type Res
 */
export interface CreateGroupRes {
  data: number
}

/**
 * @description 查询分组列表
 * @type Res
 */
export interface GetGroupListRes {
  data: GroupData[];
  total: number
}

/**
 * @description 更新分组
 * @type Req
 */
export interface UpdateGroupReq extends Partial<GroupData> { }

/**
 * @description 更新分组
 * @type Res
 */
export interface UpdateGroupRes {
  data: number
}
