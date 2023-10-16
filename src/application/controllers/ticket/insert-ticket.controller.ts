import { Controller } from '@/application/controllers'
import { badRequest, created, DataError, HttpResponse } from '@/application/helpers'
import { SaveTicketService } from '@/domain/services/ticket'
import { SaveTicketDto } from '@/domain/dtos/ticket'

type HttpRequest = SaveTicketDto
type Model = DataError | string

export class InsertTicketController extends Controller {
  constructor(private readonly service: SaveTicketService) {
    super()
  }

  protected override dto = new SaveTicketDto()

  async perform(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      await this.service(httpRequest)
      return created('ticket saved successfully')
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
