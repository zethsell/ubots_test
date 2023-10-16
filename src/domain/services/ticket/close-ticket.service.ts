import { Queues } from '@/main/config/queues'
import { CloseTicketDto } from '@/domain/dtos/ticket'
import { SaveTicket } from '@/domain/contracts/repos'
import { parseSubject } from '@/domain/helpers'

export type CloseTicketService = (input: CloseTicketDto) => Promise<void>
type Setup = (repository: SaveTicket, queues: Queues) => CloseTicketService

export const closeTicketService: Setup =
  (repository, queues) =>
  async ({ id }) => {
    const ticket = await repository.save({ id: Number(id), closedAt: new Date() })

    if (ticket?.subject === undefined) throw new Error('failed to close ticket')
    const { cards, loans, others } = queues

    if (parseSubject(ticket.subject) === 'LOAN') {
      void loans.resume()
      return
    }

    if (parseSubject(ticket.subject) === 'CARD') {
      void cards.resume()
      return
    }

    void others.resume()
  }
