import { Controller } from '@/application/controllers'
import { badRequest, created, DataError, HttpResponse } from '@/application/helpers'
import { SaveUserService } from '@/domain/services/user'
import { SaveUserDto } from '@/domain/dtos/user'

type HttpRequest = SaveUserDto
type Model = DataError | string

export class InsertUserController extends Controller {
  constructor(private readonly service: SaveUserService) {
    super()
  }

  protected override dto = new SaveUserDto()

  async perform(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      await this.service(httpRequest)
      return created('User saved successfully')
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
