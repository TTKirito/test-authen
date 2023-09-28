import { body } from "express-validator";

export const signUpValidate = [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .notEmpty()
        .isLength({ min: 8, max: 20 })
        .withMessage('Password must be between 8-20 characters'),
    body('firstName')
        .trim()
        .notEmpty()
        .withMessage('FirstName must be valid'),
    body('lastName')
        .trim()
        .notEmpty()
        .withMessage('LastName must be valid')
]

export const signInValidate = [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .notEmpty()
        .isLength({ min: 8, max: 20 })
        .withMessage('Password must be between 8-20 characters')
]