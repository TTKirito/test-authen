import express, { Request,Response } from 'express'
import { validateRequest } from '../../../middlewares/validate-request'
import userController from './controller'
import { signInValidate, signUpValidate } from './validate'
import { expressjwt as jwt } from "express-jwt"
import { requireAuthExpressJWT } from './middleware'
 

const router = express.Router()

router.post('/api/users/sign-up', signUpValidate, validateRequest, async (req: Request, res: Response) => userController.signUp(req, res))
router.post('/api/users/sign-in',signInValidate, validateRequest, async (req: Request, res: Response) => userController.signIn(req, res))
router.post('/api/users/sign-out', [], validateRequest, jwt({ secret: "mySecret", algorithms: ["HS256"] }), requireAuthExpressJWT ,async (req: Request, res: Response) => userController.signOut(req, res))

export { router as authRouter }