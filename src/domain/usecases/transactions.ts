import { ITransactions } from '@domain/models/transactions'

export interface Transaction {
  getTransactions: () => Promise<Transaction.Model>
}

export namespace Transaction {
  export type Model = ITransactions
}
