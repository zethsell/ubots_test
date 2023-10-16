import { Queue, QueueOptions } from 'bullmq'
import { env } from './env'

export type Queues = { cards: Queue } & { loans: Queue } & { others: Queue }

export const options: QueueOptions = {
  connection: {
    host: env.redis.host,
    port: env.redis.port,
    password: env.redis.password,
  },
}

export const cards = new Queue('CARD', options)
export const loans = new Queue('LOAN', options)
export const others = new Queue('OTHER', options)

export const queuesNames = ['CARD', 'LOAN', 'OTHER']
export const queues: Queues = Object.assign({}, { cards }, { loans }, { others })
