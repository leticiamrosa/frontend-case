/* eslint-disable @typescript-eslint/consistent-type-assertions */
import faker from 'faker'
import { ITransactions, ITransactionsDay } from '@domain/models/transactions'

const mockTransactionDay: ITransactionsDay[] = [
  {
    date: '2021-01-06' as unknown as Date,
    amountTotal: 128000,
    items: {
      status: 'COMPLETED',
      actor: 'José Marques',
      amount: 13920,
      source: 'PAYMENT',
      type: 'BANKSLIP',
      entry: 'CREDIT',
      scheduled: false,
      dateEvent: new Date('2021-01-06T21:00:00Z')
    } as any
  },
  {
    date: '2021-01-15' as unknown as Date,
    amountTotal: 114080,
    items: [
      {
        status: 'COMPLETED',
        actor: 'Alexandre da Silva',
        amount: 20000,
        source: 'TRANSFER',
        type: 'EXTERNAL',
        entry: 'DEBIT',
        scheduled: false,
        dateEvent: new Date('2021-01-15T00:00:00Z')
      } as any
    ]
  }
]

export const mockTransactionsModel = (): ITransactions => ({
  itemsTotal: faker.random.number(22),
  results: mockTransactionDay
})
