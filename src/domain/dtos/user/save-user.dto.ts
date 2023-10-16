import { IsIn, IsNotEmpty, IsString } from 'class-validator'

export class SaveUserDto {
  @IsNotEmpty()
  @IsString()
  name?: string

  @IsNotEmpty()
  @IsIn(['CARD', 'LOAN', 'OTHER'])
  team?: 'CARD' | 'LOAN' | 'OTHER'
}
