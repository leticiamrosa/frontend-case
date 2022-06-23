import { HttpResponse } from '@data/protocols/http'

export type HttpGetParams = {
  url: string
}

export interface HttpPostClient<T> {
  post: (params: HttpGetParams) => Promise<HttpResponse<T>>
};
