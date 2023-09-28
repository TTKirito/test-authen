import path from "path";
import 'dotenv/config'

const BASE_DB_PATH = path.join(__dirname, 'src', 'database');
console.log(process.env.DATABASE_URL_DEV, 'hiiiiiiiiii')
export default {
  development: {
    client: 'mysql',
    connection: process.env.DATABASE_URL_DEV,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(BASE_DB_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds'),
    },
    acquireConnectionTimeout: 5000,
  },
};
