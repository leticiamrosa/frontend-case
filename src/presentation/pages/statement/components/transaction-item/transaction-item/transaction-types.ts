import iconArrowDown from '@presentation/assets/images/icons/ic_arrow-down-in.svg'
import iconArrowReturn from '@presentation/assets/images/icons/ic_arrow-return.svg'
import iconTimeClock from '@presentation/assets/images/icons/ic_time-clock.svg'

import { ITransactionEntry, ITransactionStatus, ITransactionSource, ITransaction } from '@domain/models/transactions'
import { formatMoneyCentsToReal } from '@presentation/helpers/numbers-helper'
import { colors } from '@presentation/styles/theme'

export interface IFormattedPrefixAmount {
  prefix?: string
  amount: string
  color: string
}

export const transactionIconType = {
  [ITransactionStatus.COMPLETED]: iconArrowDown,
  [ITransactionStatus.REFUNDED]: iconArrowReturn,
  [ITransactionStatus.PENDING]: iconTimeClock
}

export const formattedPrefixAmount = (transaction: ITransaction): IFormattedPrefixAmount => {
  if (!transaction) return

  const amount = formatMoneyCentsToReal(transaction?.amount)

  const defaultPrefixAmount = {
    prefix: 'R$',
    amount,
    color: colors.PRIMARY_GRAY
  }

  if (transaction?.status === ITransactionStatus.REFUNDED) {
    return defaultPrefixAmount
  }

  if (transaction?.entry === ITransactionEntry.CREDIT) {
    return {
      prefix: '+ R$',
      amount,
      color: colors.SECONDARY_BLUE
    }
  }

  if (transaction?.entry === ITransactionEntry.DEBIT) {
    return {
      prefix: '- R$',
      amount,
      color: colors.PRIMARY_HIGHLIGHT
    }
  }

  return defaultPrefixAmount
}

const getTransactionLabelCompleted = (transaction: ITransaction): string => {
  const source = ITransactionSource[transaction?.source]
  const entry = ITransactionEntry[transaction?.entry]

  if (source === ITransactionSource.PAYMENT && entry === ITransactionEntry.DEBIT) {
    return 'Pagamento Realizado'
  }

  if (source === ITransactionSource.TRANSFER && entry === ITransactionEntry.DEBIT) {
    return 'Transferência Realizada'
  }

  if (source === ITransactionSource.PAYMENT && entry === ITransactionEntry.CREDIT) {
    return 'Pagamento Recebido'
  }

  if (source === ITransactionSource.TRANSFER && entry === ITransactionEntry.CREDIT) {
    return 'Transferência Recebida'
  }

  return 'Processando...'
}

const getTransactionLabelRefunded = (transaction: ITransaction): string => {
  const source = ITransactionSource[transaction?.source]
  const entry = ITransactionEntry[transaction?.entry]

  if (source === ITransactionSource.PAYMENT && entry === ITransactionEntry.CREDIT) {
    return 'Pagamento Estornado'
  }

  if (source === ITransactionSource.TRANSFER && entry === ITransactionEntry.CREDIT) {
    return 'Transferência Estornada'
  }

  return 'Processando...'
}

const getTransactionLabelPending = (transaction: ITransaction): string => {
  const source = ITransactionSource[transaction?.source]
  const entry = ITransactionEntry[transaction?.entry]

  if (source === ITransactionSource.PAYMENT && entry === ITransactionEntry.DEBIT) {
    return 'Pagamento Agendado'
  }

  if (source === ITransactionSource.TRANSFER && entry === ITransactionEntry.DEBIT) {
    return 'Transferência Agendado'
  }

  return 'Processando...'
}

export const transactionLabel = ({
  [ITransactionStatus.COMPLETED]: getTransactionLabelCompleted,
  [ITransactionStatus.REFUNDED]: getTransactionLabelRefunded,
  [ITransactionStatus.PENDING]: getTransactionLabelPending
})
