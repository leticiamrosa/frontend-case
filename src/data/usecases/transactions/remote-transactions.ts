import { HttpGetClient, HttpStatusCode } from '@data/protocols/http'
import { GenericError } from '@domain/errors/generic-error'
import { ITransactions } from '@domain/models/transactions'
import { Transaction } from '@domain/usecases/transactions'

export class RemoteTransactions implements Transaction {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<ITransactions>
  ) {}

  async getTransactions (): Promise<ITransactions> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url
    })

    if (!httpResponse || httpResponse.statusCode !== HttpStatusCode.OK) {
      throw new GenericError()
    }

    return httpResponse.data
  }
}
