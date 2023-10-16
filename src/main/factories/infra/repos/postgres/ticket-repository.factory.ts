import { TicketRepository } from '@/infra/repos/postgres/ticket.repository'

export const ticketRepositoryFactory = (): TicketRepository => new TicketRepository()
