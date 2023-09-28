import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../../../errors/bad-request-error';
import jwt from '../../../service/jwt';
import { errors } from '../../../utills/errors';

interface UserPayload {
    id: number
    email: string
    firstName: string
    lastName: string
    displayName: string
  }
  

export const ValidRefreshToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.body
    const payload = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_TOKEN_SECRET!
      ) as UserPayload

    if (!Object.keys(payload).length) {
        return res.status(400).send(new BadRequestError(errors.REFRESH_TOKEN_INVALID).serializeErrors()[0])
    }

    next();
  } catch (e) {
    return res.status(400).send(new BadRequestError(errors.REFRESH_TOKEN_INVALID).serializeErrors()[0])
  }
};
