import { User } from '.'

export type Ticket = {
  id: number
  identifier?: string
  subject?: string
  closedAt?: Date | string
  user?: User
}

export interface ListTickets {
  get: () => Promise<ListTickets.Output>
}

export namespace ListTickets {
  export type Output = Ticket[]
}

export interface SaveTicket {
  save: (input: SaveTicket.Input) => Promise<SaveTicket.Output>
}

export namespace SaveTicket {
  export type Input = Omit<Ticket, 'createdAt' | 'updatedAt' | 'id'> & { id?: number }
  export type Output = Ticket
}

export interface ShowTicket {
  show: (input: ShowTicket.Input) => Promise<ShowTicket.Output>
}

export namespace ShowTicket {
  export type Input = { id: number }
  export type Output = Ticket
}

export interface DeleteTicket {
  delete: (input: DeleteTicket.Input) => Promise<void>
}

export namespace DeleteTicket {
  export type Input = { id: number }
}
