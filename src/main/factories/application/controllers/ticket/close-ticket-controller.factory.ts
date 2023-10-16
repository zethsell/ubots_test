import { CloseTicketController } from '@/application/controllers/ticket'
import { closeTicketServiceFactory } from '@/main/factories/domain/services/ticket'
import { Controller } from '@/application/controllers'

export const closeTicketControllerFactory = (): Controller => new CloseTicketController(closeTicketServiceFactory())
