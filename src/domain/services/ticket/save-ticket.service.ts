import { SaveTicket } from '@/domain/contracts/repos'
import { SaveTicketDto } from '@/domain/dtos/ticket'
import { UUIDGenerator } from '@/domain/contracts/gateways'
import { Queues } from '@/main/config/queues'
import { parseSubject } from '@/domain/helpers'

export type SaveTicketService = (input: SaveTicketDto) => Promise<void>
type Setup = (repository: SaveTicket, queues: Queues, uuid: UUIDGenerator) => SaveTicketService

export const saveTicketService: Setup =
  (repository, queues, uuid) =>
  async ({ subject }) => {
    const identifier = uuid.generate({ key: 'ticket' })
    const ticket = await repository.save({ subject, identifier })
    const { cards, loans, others } = queues

    if (parseSubject(subject) === 'LOAN') {
      await loans.add(uuid.generate({ key: 'loans' }), { ticket }, { removeOnComplete: true })
      await loans.resume()
      return
    }

    if (parseSubject(subject) === 'CARD') {
      await cards.add(uuid.generate({ key: 'cards' }), { ticket }, { removeOnComplete: true })
      await cards.resume()
      return
    }

    await others.add(uuid.generate({ key: 'others' }), { ticket }, { removeOnComplete: true })
    await others.resume()
  }
