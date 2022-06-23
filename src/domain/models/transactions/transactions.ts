import { TransactionsDay } from '@domain/models/transactions/'

export interface Transactions {
  itemsTotal: number
  results: TransactionsDay[]
}
