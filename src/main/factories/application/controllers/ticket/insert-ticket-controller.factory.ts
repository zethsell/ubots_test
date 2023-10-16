import { InsertTicketController } from '@/application/controllers/ticket'
import { saveTicketServiceFactory } from '@/main/factories/domain/services/ticket'
import { Controller } from '@/application/controllers'

export const insertTicketControllerFactory = (): Controller => new InsertTicketController(saveTicketServiceFactory())
