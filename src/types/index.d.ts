/**
 * @description 请求回执类型
 */
export interface AsResponse{
  message: string;
  code: number;
}

type AxiosResponse<T> = AsResponse & T;

export interface PagingReq { current: number, pageSize: number }
