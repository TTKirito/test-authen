import bcrypt  from 'bcrypt'


class Password {
    async hashPassword(password:string){
        return await bcrypt.hash(password, 8)
    }

    async comparePassword(storedPassword: string, suppliedPassword:string){
        return await bcrypt.compare(suppliedPassword, storedPassword)
    }
}

export default new Password()