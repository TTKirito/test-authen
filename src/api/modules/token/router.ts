import express, { Request,Response } from 'express'
import { requireAuth } from '../../../middlewares/required-auth'
import { validateRequest } from '../../../middlewares/validate-request'
import tokenController from './controller'
import { ValidRefreshToken } from './middleware'
import { refreshTokenValidate } from './validate'

const router = express.Router()

router.post('/api/tokens/refresh-token', refreshTokenValidate, validateRequest, requireAuth, ValidRefreshToken, async (req: Request, res: Response) => tokenController.refreshToken(req, res))

export { router as tokenRouter }