/* eslint-disable @typescript-eslint/no-namespace */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

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
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('Authorization')?.replace('Bearer ','')
  if (!token) {
    return next();
  }

  const payload = jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as UserPayload;
  req.currentUser = payload;
  
  next();
};
