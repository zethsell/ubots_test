import { ContentNotFound, ForbiddenError, ServerError, UnauthorizedError } from '@/application/errors'

export type HttpResponse<T = any> = {
  statusCode: number
  data: T | { data: T }
}

export type DataError = {
  error: string
}

export interface HttpRequest {
  data?: any
}

export const ok = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  data: { data },
})

export const created = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 201,
  data: { data },
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  data: {},
})

export const badRequest = (error: Error): HttpResponse<DataError> => ({
  statusCode: 400,
  data: { error: error.message },
})

export const invalidRequest = (error: any): HttpResponse => ({
  statusCode: 422,
  data: { error },
})

export const unauthorized = (error?: Error): HttpResponse<DataError> => ({
  statusCode: 401,
  data: { error: (error ?? new UnauthorizedError()).message },
})

export const forbidden = (): HttpResponse<DataError> => ({
  statusCode: 403,
  data: { error: new ForbiddenError().message },
})

export const contentNotFound = (field: string): HttpResponse<DataError> => ({
  statusCode: 404,
  data: { error: new ContentNotFound(field).message },
})

export const serverError = (error: Error | any): HttpResponse<DataError> => ({
  statusCode: 500,
  data: { error: new ServerError(error).message },
})
