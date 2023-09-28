import { database } from "../../../database";

class Repository {
    async getOne(condition: any) {
        return await database('Tokens').where(condition);
    }

    async createOne(data: any) {
        return await database('Tokens').insert(data).returning('*');
    }

    async deleteOne(condition: any) {
        return await database('Tokens').del().where(condition)
    }
}


export default new Repository()