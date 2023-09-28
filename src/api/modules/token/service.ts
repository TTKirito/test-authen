import { BadRequestError } from '../../../errors/bad-request-error'
import { errors } from '../../../utills/errors'
import tokenRepository from './repository'
import userRepository from '../auth/repository'
import { refreshTokenInput, refreshTokenOutPut } from './interface'
import jwtService from '../../../service/jwt'

class TokenService {
    async refreshToken ({ refreshToken, id: userId }: refreshTokenInput): Promise<refreshTokenOutPut> {
        const refresh: any = await tokenRepository.getOne({ refreshToken, userId }).then(res => JSON.parse(JSON.stringify(res)))

        if (!refresh.length) throw new BadRequestError(errors.REFRESH_TOKEN_INVALID)

        const user:any = await userRepository.getOne({ id: userId })
        const { firstName, lastName, email, id } = user
        const payload = {
            firstName,
            lastName,
            displayName: `${firstName} ${lastName}`,
            email,
            id
        }
        const token = jwtService.issue(payload, '1h')
      
        return {
            refreshToken: refresh[0].refreshToken,
            token
        }
    }
}


export default new TokenService()