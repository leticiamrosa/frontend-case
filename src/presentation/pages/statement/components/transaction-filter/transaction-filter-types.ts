
import { ITransactionEntry } from '@domain/models/transactions'

export enum TransactionFilterTypes {
  ENTRY = 'ENTRY',
  WITHDRAW = 'WITHDRAW',
  SCHEDULED = 'SCHEDULED',
  ALL = 'ALL',
}

export const TransactionFilterLabel = {
  [TransactionFilterTypes.ENTRY]: 'Entrada',
  [TransactionFilterTypes.WITHDRAW]: 'Saída',
  [TransactionFilterTypes.SCHEDULED]: 'Futuro',
  [TransactionFilterTypes.ALL]: 'Tudo'
}

export const transactionFilterType = {
  [ITransactionEntry.CREDIT]: (isSheduled: boolean) => {
    if (isSheduled) {
      return TransactionFilterTypes.SCHEDULED
    }
    return TransactionFilterTypes.ENTRY
  },
  [ITransactionEntry.DEBIT]: (isSheduled: boolean) => {
    if (isSheduled) {
      return TransactionFilterTypes.SCHEDULED
    }
    return TransactionFilterTypes.WITHDRAW
  }
}
