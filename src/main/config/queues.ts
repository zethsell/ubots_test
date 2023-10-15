import {Queue, QueueOptions} from "bullmq";
import {env} from "./env.js";

export const options: QueueOptions = {
    connection: {
        host: env.redis.host,
        port: env.redis.port,
        password: env.redis.password,
    }
}

export const cards = new Queue('cards', options)
export const loans = new Queue('loans', options)
export const others = new Queue('others', options)

export const queuesNames = ['cards', 'loans', 'others']
export const queues = [cards, loans, others]
