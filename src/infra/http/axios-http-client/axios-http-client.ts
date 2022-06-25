import { HttpGetClient, HttpGetParams, HttpResponse } from '@data/protocols/http'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpGetClient<any> {
  async get ({ url }: HttpGetParams): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>

    try {
      httpResponse = await axios.get(url)
    } catch (error) {
      httpResponse = error.response
    }

    return {
      statusCode: httpResponse.status,
      data: httpResponse.data
    }
  }
}