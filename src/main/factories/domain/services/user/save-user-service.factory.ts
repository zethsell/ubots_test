import { SaveUserService, saveUserService } from '@/domain/services/user'
import { userRepositoryFactory } from '@/main/factories/infra/repos/postgres'
import { queues } from '@/main/config'

export const saveUserServiceFactory = (): SaveUserService => saveUserService(userRepositoryFactory(), queues)
