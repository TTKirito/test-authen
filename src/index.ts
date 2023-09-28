import { app }  from './app'
import { dbInit } from './database/index'
import 'dotenv/config'

const start = async () =>{
    dbInit()
    app.listen(3000,()=>{
        console.log(`Server is running at 3000!!!`)
    })
}

start()
