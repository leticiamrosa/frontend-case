import { HttpGetClient, HttpResponseType } from '@data/protocols/http'
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

    const transactions = HttpResponseType[httpResponse.statusCode](httpResponse.data)

    return transactions
  }
}
