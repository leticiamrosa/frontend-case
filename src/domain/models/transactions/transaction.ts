import { ITransactionStatus, ITransactionSource, ITransactionType, ITransactionEntry } from '@domain/models/transactions/'

export interface ITransaction {
  status: ITransactionStatus
  actor: string
  amount: string
  source: ITransactionSource
  type: ITransactionType
  entry: ITransactionEntry
  scheduled: boolean
  dateEvent: Date
}
