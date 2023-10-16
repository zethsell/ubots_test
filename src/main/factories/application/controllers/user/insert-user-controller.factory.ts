import { InsertUserController } from '@/application/controllers/user'
import { saveUserServiceFactory } from '@/main/factories/domain/services/user'
import { Controller } from '@/application/controllers'

export const insertUserControllerFactory = (): Controller => new InsertUserController(saveUserServiceFactory())
