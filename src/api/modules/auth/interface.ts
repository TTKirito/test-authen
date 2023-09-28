export interface SignUpInput {
    email: string
    password: string
    firstName: string
    lastName: string
    displayName?: string
    id?: number
}

export interface SignUpOutPut {
    email: string
    firstName: string
    lastName: string
    displayName: string
    id: number
}

export interface SignIn {
    email: string
    password: string
}

export interface SignInOutPut {
    user: SignUpOutPut
    token: string,
    refreshToken: string
}

