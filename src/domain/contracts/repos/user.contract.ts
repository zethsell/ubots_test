import { Ticket } from '.'

export type User = {
  id: number
  name?: string
  team?: 'CARD' | 'LOAN' | 'OTHER'
  tickets?: Ticket[]
}

export interface ListUsers {
  get: () => Promise<ListUsers.Output>
}

export namespace ListUsers {
  export type Output = User[]
}

export interface SaveUser {
  save: (input: SaveUser.Input) => Promise<SaveUser.Output>
}

export namespace SaveUser {
  export type Input = Omit<User, 'createdAt' | 'updatedAt' | 'id'> & { id?: number }
  export type Output = User
}

export interface ShowUser {
  show: (input: ShowUser.Input) => Promise<ShowUser.Output>
}

export namespace ShowUser {
  export type Input = { id: number }
  export type Output = User
}

export interface DeleteUser {
  delete: (input: DeleteUser.Input) => Promise<void>
}

export namespace DeleteUser {
  export type Input = { id: number }
}
