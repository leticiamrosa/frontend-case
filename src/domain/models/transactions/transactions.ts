import { ITransactionsDay } from '@domain/models/transactions/'

export interface ITransactions {
  itemsTotal: number
  results: ITransactionsDay[]
}
