import { Controller } from '@/application/controllers'
import { badRequest, DataError, HttpResponse, ok } from '@/application/helpers'
import { CloseTicketService } from '@/domain/services/ticket'
import { CloseTicketDto } from '@/domain/dtos/ticket'

type Model = DataError | string

export class CloseTicketController extends Controller {
  constructor(private readonly service: CloseTicketService) {
    super()
  }

  protected override dto = new CloseTicketDto()

  async perform(httpRequest: CloseTicketDto): Promise<HttpResponse<Model>> {
    try {
      await this.service(httpRequest)
      return ok('ticket saved successfully')
    } catch (error: any) {
      return badRequest(error)
    }
  }
}
