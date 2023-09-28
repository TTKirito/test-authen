/* eslint-disable @typescript-eslint/no-namespace */
import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../../../errors/not-authorized-error';

interface UserPayload {
    id: number
    email: string
    firstName: string
    lastName: string
    displayName: string
  }
  

declare global {
    namespace Express {
      interface Request {
        auth?: UserPayload;
      }
    }
}
  

export const requireAuthExpressJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.auth) {
    return res.status(401).send(new NotAuthorizedError().serializeErrors())
  }

  next();
};
