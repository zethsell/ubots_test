import { ListUsersService, listUsersService } from '@/domain/services/user'
import { userRepositoryFactory } from '@/main/factories/infra/repos/postgres'

export const listUsersServiceFactory = (): ListUsersService => listUsersService(userRepositoryFactory())
