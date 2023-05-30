/**
 * @description 登陆参数
 */
export type LoginInReq = {
    username: string,
    password: string,
    code?: string,
}
/**
 * @description 获取用户结果
 */
export type LoginInRes = {
  token:string
}