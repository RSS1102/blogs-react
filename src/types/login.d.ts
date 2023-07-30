/**
 * @description 登陆参数
 */
export interface LoginInReq {
  username: string,
  password: string,
  code?: string,
}
/**
 * @description 获取用户结果
 */
export interface LoginInRes {
  token: string
  data: string
}