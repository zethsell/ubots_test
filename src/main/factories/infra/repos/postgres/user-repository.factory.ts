import { UserRepository } from '@/infra/repos/postgres'

export const userRepositoryFactory = (): UserRepository => new UserRepository()
