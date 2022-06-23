import { ITransactions } from '@domain/models/transactions'

export interface Transaction {
  getTransactions: () => Promise<ITransactions>
}
