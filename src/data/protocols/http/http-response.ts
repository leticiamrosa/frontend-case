import { HttpStatusCode } from '@data/protocols/http'

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  data?: T
}
