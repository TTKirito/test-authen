import request from 'supertest'
import { app } from '../../../../app'

it('returns a 401 if not authenticate', async ()=>{
    await request(app)
        .post('/api/users/sign-out')
        .expect(401)
})