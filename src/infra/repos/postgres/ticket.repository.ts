import { PgRepository } from '.'
import { TicketEntity } from '@/infra/repos/postgres/entities'
import { DeleteTicket, ListTickets, SaveTicket, ShowTicket } from '@/domain/contracts/repos'

export class TicketRepository extends PgRepository implements ListTickets, ShowTicket, SaveTicket, DeleteTicket {
  async get(): Promise<ListTickets.Output> {
    return await this.getRepository(TicketEntity).find()
  }

  async show({ id }: ShowTicket.Input): Promise<ShowTicket.Output> {
    return await this.getRepository(TicketEntity).findOne({ where: { id } })
  }

  async save(input: SaveTicket.Input): Promise<SaveTicket.Output> {
    // input.id &&= Number(input.id)
    const { id } = await this.getRepository(TicketEntity).save(input)
    return this.show({ id })
  }

  async delete({ id }: DeleteTicket.Input): Promise<void> {
    await this.getRepository(TicketEntity).softDelete(id)
  }
}
