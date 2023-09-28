import { body } from "express-validator";

export const refreshTokenValidate = [
    body('refreshToken')
        .trim()
        .notEmpty()
        .withMessage('RefreshToken must be valid')
]
