import { Request, Response } from 'express'
import { handleExceptionResponse, handleReturnResponse } from '../../../utills/return'
import TokenService from './service'

class TokenController {
    async refreshToken (req: Request, res: Response) {
        try {
            const { refreshToken } = req.body
            const id = req.currentUser?.id
            const result = await TokenService.refreshToken({ refreshToken, id })
            return handleReturnResponse(200, res, result)
        } catch (e: any) {
            return handleExceptionResponse(e.statusCode, res, e.message)
        }
    }


}

export default new TokenController()