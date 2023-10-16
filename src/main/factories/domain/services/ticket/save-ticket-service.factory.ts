import { saveTicketService, SaveTicketService } from '@/domain/services/ticket/save-ticket.service'
import { ticketRepositoryFactory } from '@/main/factories/infra/repos/postgres'
import { uuidFactory } from '@/main/factories/infra/gateways'
import { queues } from '@/main/config/queues'

export const saveTicketServiceFactory = (): SaveTicketService =>
  saveTicketService(ticketRepositoryFactory(), queues, uuidFactory())
