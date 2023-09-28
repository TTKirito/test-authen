import request from 'supertest'
import { app } from '../../../../app'

it('returns a 401 if not authenticate', async ()=>{
    await request(app)
        .post('/api/tokens/refresh-token')
        .send({ refreshToken: "123" })
        .expect(401)
})