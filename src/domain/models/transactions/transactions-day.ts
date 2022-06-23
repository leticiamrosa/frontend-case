import { ITransaction } from '@domain/models/transactions/'

export interface ITransactionsDay {
  date: string
  amountTotal: number
  items: ITransaction[]
}
