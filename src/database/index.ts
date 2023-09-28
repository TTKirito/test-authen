import knextFile from '../../knexfile'
import db from 'knex'
export const database = db(knextFile['development']);

export async function dbInit() {
    return database.raw('select 1+1 as result')
        .catch((err: any) => {
            console.log('[Fatal] Failed to establish connection to database! Exiting...');
            console.log(err);
            process.exit(1);
        });
}
