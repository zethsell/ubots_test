import { closeTicketService, CloseTicketService } from '@/domain/services/ticket'
import { ticketRepositoryFactory } from '@/main/factories/infra/repos/postgres'
import { queues } from '@/main/config/queues'

export const closeTicketServiceFactory = (): CloseTicketService => closeTicketService(ticketRepositoryFactory(), queues)
