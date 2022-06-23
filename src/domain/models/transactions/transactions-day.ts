import { Transaction } from '@domain/models/transactions/'

export interface TransactionsDay {
  date: string
  amountTotal: number
  items: Transaction[]
}
