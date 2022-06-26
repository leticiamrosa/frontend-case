import faker from 'faker'
import {
  HttpResponse,
  HttpStatusCode,
  HttpRequest,
  HttpClient
} from '@data/protocols/http'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement()
})

export class HttpClientSpy<T = any> implements HttpClient<T> {
  url?: string
  method?: string
  body?: any
  headers?: any
  response: HttpResponse<T> = {
    statusCode: HttpStatusCode.OK
  }

  async request (data: HttpRequest): Promise<HttpResponse<T>> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers
    return this.response
  };
};
