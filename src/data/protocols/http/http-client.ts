export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNATHORIZED = 401,
  NOT_FOUND = 404,
  NO_CONTENT = 204,
  SERVER_ERROR = 500,
  DEFAULT = 500,
};

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  data?: T
}

export interface HttpClient<T> {
  request: (data: HttpRequest) => Promise<HttpResponse<T>>
}
