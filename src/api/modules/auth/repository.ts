import { database } from "../../../database";

class Repository {
    async getOne(condition: any) {
        return await database('Users').where(condition).leftJoin('Tokens as T', 'T.userId', 'Users.id');
    }

    async createOne(data: any) {
        return await database('Users').insert(data).returning('*');
    }
}


export default new Repository()