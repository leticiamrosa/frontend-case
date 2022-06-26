import { HttpClient, HttpStatusCode } from '@data/protocols/http'
import { GenericError } from '@domain/errors/generic-error'
import { Transaction } from '@domain/usecases/transactions'

export class RemoteTransactions implements Transaction {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<Transaction.Model>
  ) {}

  async getTransactions (): Promise<Transaction.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    if (!httpResponse || httpResponse.statusCode !== HttpStatusCode.OK) {
      throw new GenericError()
    }

    return httpResponse.data
  }
}

export namespace RemoteTransactions {
  export type Model = Transaction.Model
}
