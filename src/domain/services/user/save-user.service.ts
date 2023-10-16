import { SaveUser } from '@/domain/contracts/repos'
import { SaveUserDto } from '@/domain/dtos/user'
import { Queues } from '@/main/config'

export type SaveUserService = (input: SaveUserDto) => Promise<void>
type Setup = (repository: SaveUser, queues: Queues) => SaveUserService

export const saveUserService: Setup = (repository, queues) => async (input) => {
  const user = await repository.save(input)

  if (user?.team === undefined) throw new Error('failed to save user')
  const { cards, loans, others } = queues

  if (user?.team === 'LOAN') {
    void loans.resume()
    return
  }

  if (user?.team === 'CARD') {
    void cards.resume()
    return
  }

  void others.resume()
}
