import { makeApiUrl, makeAxiosHttpClient } from '@main/factories/http'
import { RemoteTransactions } from '@data/usecases/transactions/remote-transactions'
import { Transaction } from '@domain/usecases/transactions'

export const makeRemoteTransactions = (): Transaction => {
  const url = makeApiUrl('/transactions')
  const axiosClient = makeAxiosHttpClient()
  const service = new RemoteTransactions(url, axiosClient)

  return service
}
