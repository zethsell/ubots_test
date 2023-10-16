import { adaptExpressRoute as adapt } from '@/main/adapters'
import { Router } from 'express'
import {
  closeTicketControllerFactory,
  insertTicketControllerFactory,
} from '@/main/factories/application/controllers/ticket'

export default (router: Router): void => {
  router.post('/tickets', adapt(insertTicketControllerFactory()))
  router.patch('/close-ticket/:id', adapt(closeTicketControllerFactory()))
}
