import { ITransaction } from '@domain/models/transactions/'

export interface ITransactionsDay {
  date: Date
  amountTotal: number
  items: ITransaction[]
}
