import { Request, Response } from 'express'
import { handleExceptionResponse, handleReturnResponse } from '../../../utills/return'
import UserService from './service'

class UserController {
    async signUp (req: Request, res: Response) {
        try {
            const { email, password, firstName, lastName } = req.body
            const result = await UserService.signUp({ email, password, firstName, lastName })
            return handleReturnResponse(201, res, result)
        } catch (e: any) {
            return handleExceptionResponse(e.statusCode, res, e.message)
        }
    }

    async signIn (req: Request, res: Response) {
        try {
            const { email, password } = req.body
            const result = await UserService.signIn({ email, password })
            return handleReturnResponse(200, res, result)
        } catch (e: any) {
            return handleExceptionResponse(e.statusCode, res, e.message)
        }
    }

    async signOut (req: Request, res: Response) {
        try {
            const id = req.auth?.id
            const result = await UserService.signOut(id)
            return handleReturnResponse(204, res, result)
        } catch (e: any) {
            return handleExceptionResponse(e.statusCode, res, e.message)
        }
    }
}

export default new UserController()