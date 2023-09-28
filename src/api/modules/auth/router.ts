import express, { Request,Response } from 'express'
import { requireAuth } from '../../../middlewares/required-auth'
import { validateRequest } from '../../../middlewares/validate-request'
import userController from './controller'
import { signInValidate, signUpValidate } from './validate'

const router = express.Router()

router.post('/api/users/sign-up', signUpValidate, validateRequest, async (req: Request, res: Response) => userController.signUp(req, res))
router.post('/api/users/sign-in',signInValidate, validateRequest, async (req: Request, res: Response) => userController.signIn(req, res))
router.post('/api/users/sign-out', [], validateRequest, requireAuth, async (req: Request, res: Response) => userController.signOut(req, res))

export { router as authRouter }