/* eslint-disable @typescript-eslint/no-namespace */
import { database } from '../database'

beforeAll(async ()=>{
    await database('Tokens').del().then(async() => await database('Users').del())
})

beforeEach(async ()=>{
    await database('Tokens').del().then(async() => await database('Users').del())
    
})

afterAll(async ()=>{
    await database('Tokens').del().then(async () => await database('Users').del())
})

