import {
  HttpGetClient,
  HttpGetParams,
  HttpResponse,
  HttpStatusCode
} from '@data/protocols/http'

export class HttpGetClientSpy<T> implements HttpGetClient<T> {
  url?: string
  response: HttpResponse<T> = {
    statusCode: HttpStatusCode.OK
  }

  async get (params: HttpGetParams): Promise<HttpResponse<T>> {
    this.url = params.url
    return Promise.resolve(this.response)
  };
};
