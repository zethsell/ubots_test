import { IsNotEmpty, IsString } from 'class-validator'

export class SaveTicketDto {
  @IsNotEmpty()
  @IsString()
  subject!: string
}
