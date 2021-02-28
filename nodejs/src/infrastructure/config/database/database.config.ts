import * as dotenv from 'dotenv';

dotenv.config();

export default {
    url: `mongodb://user:user@${process.env.DB_HOST}:${process.env.DB_PORT}/XelpDB?authSource=admin`
};