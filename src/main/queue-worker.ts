import { Worker } from 'bullmq'
import { cards, env, loans, options, others, queuesNames } from './config'
import Redis from 'ioredis'
import { ticketJobFactory } from '@/main/factories/domain/jobs/ticket-job.factory'
import { Ticket } from '@/domain/contracts/repos'
import { PgConnection } from '@/infra/repos/postgres/helpers'

const redis = new Redis({
  port: env.redis.port,
  host: env.redis.host,
  password: env.redis.password,
})

Promise.resolve().then(async () => {
  redis.disconnect()
  await cards.pause()
  await loans.pause()
  await others.pause()
})

const ticketJob = ticketJobFactory()

PgConnection.getInstance()
  .connect()
  .then(() => {
    new Worker(
      'LOAN',
      async (job) => {
        await ticketJob({
          data: {
            origin: 'LOAN',
            ticket: job.data.ticket as Ticket,
            queue: loans,
          },
        })
        console.log(job.name)
      },
      options,
    )

    new Worker(
      'CARD',
      async (job) => {
        await ticketJob({
          data: {
            origin: 'CARD',
            ticket: job.data.ticket as Ticket,
            queue: cards,
          },
        }).catch((err) => {
          console.error(err)
        })
        console.log(job.name)
      },
      options,
    )

    new Worker(
      'OTHER',
      async (job) => {
        await ticketJob({
          data: {
            origin: 'OTHER',
            ticket: job.data.ticket as Ticket,
            queue: others,
          },
        })
        console.log(job.name)
      },
      options,
    )
  })
  .catch((err) => console.error(err))

console.log('workers running: ', queuesNames.join(','))
