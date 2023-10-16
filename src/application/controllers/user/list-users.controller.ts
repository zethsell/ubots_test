import { Controller } from '@/application/controllers'
import { badRequest, DataError, HttpResponse, ok } from '@/application/helpers'
import { ListUsersService } from '@/domain/services/user'
import { ListUsers } from '@/domain/contracts/repos'

type Model = DataError | ListUsers.Output

export class ListUsersController extends Controller {
  constructor(private readonly service: ListUsersService) {
    super()
  }

  async perform(): Promise<HttpResponse<Model>> {
    try {
      return ok(await this.service())
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
