import { HttpStatusCode } from '@data/protocols/http'
import { GenericError } from '@domain/errors/generic-error'

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  data?: T
}

export const HttpResponseType = {
  [HttpStatusCode.OK]: (response: any) => response?.data,
  [HttpStatusCode.SERVER_ERROR]: () => { throw new GenericError() },
  [HttpStatusCode.DEFAULT]: () => { throw new GenericError() }
}
