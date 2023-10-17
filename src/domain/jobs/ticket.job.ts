import { ListUsers, SaveTicket, Ticket } from '@/domain/contracts/repos'
import { Queue } from 'bullmq'
import { UUIDGenerator } from '@/domain/contracts/gateways'

type Input = {
  data: {
    origin: 'CARD' | 'LOAN' | 'OTHER'
    ticket: Ticket
    queue: Queue
  }
}

export type TicketJob = (input: Input) => Promise<void>
type Setup = (userRepository: ListUsers, ticketRepository: SaveTicket, uuid: UUIDGenerator) => TicketJob

export const ticketJob: Setup =
  (userRepository, ticketRepository, uuid) =>
  async ({ data: { origin, ticket, queue } }) => {
    const users = await userRepository.get()
    const filteredUsers = users.filter((user) => user.team === origin).filter((user) => user.tickets!.length < 3)
    if (filteredUsers.length === 0) {
      await queue.pause()
      await queue.add(uuid.generate({ key: `${origin.toLowerCase()}s` }), { ticket })
      return
    }
    ticket.user = { id: filteredUsers.at(0)!.id }
    await ticketRepository.save({ id: Number(ticket.id), user: { id: filteredUsers.at(0)!.id } })
    await queue.resume()
  }
