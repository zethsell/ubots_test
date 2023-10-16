import { HttpResponse, invalidRequest, serverError } from '@/application/helpers'
import { validate, ValidationError } from 'class-validator'

export abstract class Controller {
  protected dto: any

  abstract perform(httpRequest: any): Promise<HttpResponse>

  async handle(httpRequest: any): Promise<HttpResponse> {
    const errors = await this.runValidate(httpRequest)
    if (errors.length > 0) return invalidRequest(this.parseErrors(errors) as any)
    try {
      return await this.perform(httpRequest)
    } catch (error: any) {
      return serverError(error)
    }
  }

  private async runValidate(httpRequest: any): Promise<ValidationError[]> {
    this.validator(httpRequest)
    return this.dto !== undefined ? validate(this.dto).then((errors) => errors) : []
  }

  private validator(httpRequest: any) {
    Object.entries(httpRequest).forEach(([k, v]) => {
      this.dto[k as keyof typeof this.dto] = v
    })
  }

  private parseErrors(errors: ValidationError[]) {
    return errors.map((error) => ({
      field: error.property,
      errors: Object.values(error.constraints!).map((c) => c),
    }))
  }
}
