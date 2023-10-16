import { adaptExpressRoute as adapt } from '@/main/adapters'
import { Router } from 'express'
import { insertUserControllerFactory, listUsersControllerFactory } from '@/main/factories/application/controllers/user'

export default (router: Router): void => {
  router.get('/users', adapt(listUsersControllerFactory()))
  router.post('/users', adapt(insertUserControllerFactory()))
}
