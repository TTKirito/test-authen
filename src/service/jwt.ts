import JWT from 'jsonwebtoken';

class Jwt {
    secret
    expiresIn
    constructor() {
        this.secret = process.env.JWT_SECRET;
        this.expiresIn =  process.env.JWT_EXPIRES_IN;
    }

    issue(payload: any, expiresIn: string, secret?: string) {
        return JWT.sign(payload, secret || this.secret, { expiresIn: expiresIn || this.expiresIn  });
    }

    verify(token: any, secret?: string) {
        return JWT.verify(token, secret ? secret : this.secret);
    }
}

export default new Jwt();
