import { ListUsersController } from '@/application/controllers/user'
import { listUsersServiceFactory } from '@/main/factories/domain/services/user'
import { Controller } from '@/application/controllers'

export const listUsersControllerFactory = (): Controller => new ListUsersController(listUsersServiceFactory())
