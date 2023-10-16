import { ListUsers } from '@/domain/contracts/repos'

export type ListUsersService = () => Promise<ListUsers.Output>
type Setup = (repository: ListUsers) => ListUsersService

export const listUsersService: Setup = (repository) => async () => await repository.get()
