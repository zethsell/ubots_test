import { PgRepository } from '.'
import { UserEntity } from '@/infra/repos/postgres/entities'
import { DeleteUser, ListUsers, SaveUser, ShowUser } from '@/domain/contracts/repos'

export class UserRepository extends PgRepository implements ListUsers, ShowUser, SaveUser, DeleteUser {
  async get(): Promise<ListUsers.Output> {
    return await this.getRepository(UserEntity)
      .createQueryBuilder('users')
      .leftJoin('users.tickets', 'tickets')
      .select(['tickets', 'users'])
      .orderBy('users.id', 'ASC')
      .where('tickets.closedAt IS NULL')
      .getMany()
  }

  async show({ id }: ShowUser.Input): Promise<ShowUser.Output> {
    return await this.getRepository(UserEntity).findOne({ where: { id } })
  }

  async save(input: SaveUser.Input): Promise<SaveUser.Output> {
    input.id &&= Number(input.id)
    const { id } = await this.getRepository(UserEntity).save(input)
    return this.show({ id })
  }

  async delete({ id }: DeleteUser.Input): Promise<void> {
    await this.getRepository(UserEntity).softDelete(id)
  }
}
