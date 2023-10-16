import { IsNotEmpty } from 'class-validator'
import { ExistsValidator } from '@/application/validators'
import { TicketEntity } from '@/infra/repos/postgres/entities'

export class CloseTicketDto {
  @IsNotEmpty()
  @ExistsValidator(TicketEntity, 'id')
  id!: number
}
