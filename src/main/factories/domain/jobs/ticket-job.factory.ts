import { ticketJob, TicketJob } from '@/domain/jobs'
import { ticketRepositoryFactory, userRepositoryFactory } from '@/main/factories/infra/repos/postgres'
import { uuidFactory } from '@/main/factories/infra/gateways'

export const ticketJobFactory = (): TicketJob =>
  ticketJob(userRepositoryFactory(), ticketRepositoryFactory(), uuidFactory())
