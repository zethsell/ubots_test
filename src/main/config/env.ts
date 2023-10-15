import 'dotenv/config'

type DBType = 'postgres' | 'mysql'

export const env = {
    server: {
        port: process.env.SERVER_PORT ?? 5555
    },
    db: {
        type: process.env.DB_TYPE as DBType,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        schema: process.env.DB_SCHEMA ?? 'public',
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PASS
    }
}