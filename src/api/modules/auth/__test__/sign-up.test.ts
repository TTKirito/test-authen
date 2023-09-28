import request from 'supertest'
import { app } from '../../../../app'

it('returns a 400 if invalid email and password', async ()=>{
    await request(app)
        .post('/api/users/sign-up')
        .send({
            password: 'password'
        })
        .expect(400)
    await request(app)
        .post('/api/users/sign-up')
        .send({
            email: '',
            password: 'password'
        })
        .expect(400)
    await request(app)
        .post('/api/users/sign-up')
        .send({
            email: 'test@gmail.com',
            password: '123'
        })
        .expect(400)
})
it('disallows dupplicate email', async ()=>{
    await request(app)
        .post('/api/users/sign-up')
        .send({
            email: 'signunTest4@gmail.com',
            password: 'password123',
            firstName: 'test',
            lastName: 'test'
        })
        .expect(201)
    await request(app)
        .post('/api/users/sign-up')
        .send({
            email: 'signunTest4@gmail.com',
            password: 'passwor1d123',
            firstName: 'test',
            lastName: 'test'
        })
        .expect(400)
})

it('return success valid input', async ()=>{
    const response = await request(app)
        .post('/api/users/sign-up')
        .send({
            email: 'signunTest1@gmail.com',
            password: 'passwor1d123',
            firstName: 'test',
            lastName: 'test'
        })
        .expect(201)
    expect(response.body.success).toEqual(true)
})