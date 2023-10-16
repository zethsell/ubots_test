import { DataSource } from 'typeorm'
import { env } from './env'
import { TicketEntity, UserEntity } from '@/infra/repos/postgres/entities'

const url = `${env.db.type}://${env.db.username}:${env.db.password}@${env.db.host}:${env.db.port}/${env.db.database}?currentSchema=${env.db.schema}`
const type = env.db.type

export const PgDataSource = new DataSource({
  type,
  url,
  entities: [UserEntity, TicketEntity],
  migrations: ['src/infra/repos/postgres/migrations/*{.ts,.js}'],
  migrationsRun: true,
  synchronize: true,
})
