import { BadRequestError } from '../../../errors/bad-request-error'
import { errors } from '../../../utills/errors'
import passwordService from '../../../service/password'
import userRepository from './repository'
import tokenRepository from '../token/repository'
import jwtService from '../../../service/jwt'
import { SignIn, SignInOutPut, SignUpInput, SignUpOutPut } from './interface'
import moment from 'moment'

class UserService {
    async signUp ({ email, password, firstName, lastName }: SignUpInput): Promise<SignUpOutPut> {
        const existedEmail = await userRepository.getOne({ email })

        if (existedEmail.length) {
            throw new BadRequestError(errors.EMAIL_DUPLICATE)
        }

        const hash = await passwordService.hashPassword(password)
        const newUserId = await userRepository.createOne({ email, hash, firstName, lastName })
        return {
            id: newUserId[0],
            firstName,
            lastName,
            email,
            displayName: `${firstName} ${lastName}`
        }
    }


    async signIn ({ email, password }: SignIn): Promise<SignInOutPut> {
        const existedEmail: any = await userRepository.getOne({ email }).then(res => JSON.parse(JSON.stringify(res)))

        if (!existedEmail.length) {
            throw new BadRequestError(errors.EMAIL_NOT_VALID)
        }

        const { firstName, lastName, id, hash } = existedEmail[0]
        let { refreshToken } = existedEmail[0]
        const isMatch = await passwordService.comparePassword(hash, password)

        if (!isMatch) {
            throw new BadRequestError(errors.PASSWORD_NOT_VALID)
        }

        const user = {
            firstName,
            lastName,
            displayName: `${firstName} ${lastName}`,
            email,
            id
        }
        const token = jwtService.issue(user, '1h')
        
        if (!refreshToken) {
            refreshToken = jwtService.issue(user, '30d', process.env.JWT_REFRESH_TOKEN_SECRET)
            await tokenRepository.createOne({ 
                userId: id,
                refreshToken,
                expiresIn: moment(Date.now()).add(30, 'd').unix()
            })
        }

        return {
            user,
            token,
            refreshToken
        }
    }

    async signOut (id?: number): Promise<boolean> {
        await tokenRepository.deleteOne({ userId: id })
        return true
    }
}


export default new UserService()