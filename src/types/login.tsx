export type LoginReqType = {
    usename: string,
    passwold: string,
    code: string,
}
export type LoginResType = {
    code: number,
    message: string
}