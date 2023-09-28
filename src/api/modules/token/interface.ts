export interface refreshTokenInput {
    refreshToken: string
    id?: number
}

export interface refreshTokenOutPut {
    refreshToken: string
    token: string
}
