import express, { NextFunction, Request, Response } from 'express'
import { authRouter } from './api/modules/auth/router'
import { tokenRouter } from './api/modules/token/router'
import { NotFoundError } from './errors/not-found-error'
import { currentUser } from './middlewares/current-user'
import { handleExceptionResponse } from './utills/return'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(currentUser)
app.use(authRouter)
app.use(tokenRouter)
app.all('*', async (req, res) => {
    try {
        throw new NotFoundError()
    } catch (e: any) {
        return handleExceptionResponse(e.statusCode, res, e.message)
    }
});
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    if (err.name === "UnauthorizedError") {
      return handleExceptionResponse(401, res, 'Not authorized')
    } else {
      next(err);
    }
});

export { app }