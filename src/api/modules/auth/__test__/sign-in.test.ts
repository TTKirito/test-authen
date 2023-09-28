import request from 'supertest'
import { app } from '../../../../app'

it('returns a 400 if invalid email and password', async ()=>{
    await request(app)
        .post('/api/users/sign-up')
        .send({
            email: 'thuantest@gmail.com',
            password: 'password123',
            firstName: 'test',
            lastName: 'test'
        })
        .expect(201)
    await request(app)
        .post('/api/users/sign-in')
        .send({
            email: 'thuantest@gmail.com',
            password: '12332133333'
        })
        .expect(400)
    await request(app)
        .post('/api/users/sign-in')
        .send({
            email: 'thuantest1@gmal.com',
            password: 'password123'
        })
        .expect(400)
})