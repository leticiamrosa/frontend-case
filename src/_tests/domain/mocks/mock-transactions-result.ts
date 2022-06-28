/* eslint-disable @typescript-eslint/consistent-type-assertions */
import faker from 'faker'
import { ITransactions, ITransactionsDay } from '@domain/models/transactions'

export const mockTransactionDay: ITransactionsDay[] = [
  {
    date: '2020-01-06',
    amountTotal: 128000,
    items: [
      {
        status: 'COMPLETED',
        actor: 'José Marques',
        amount: 13920,
        source: 'PAYMENT',
        type: 'BANKSLIP',
        entry: 'CREDIT',
        scheduled: false,
        dateEvent: '2020-01-06T21:00:00Z'
      }
    ]
  },
  {
    date: '2020-01-15',
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
        dateEvent: '2020-01-15T00:00:00Z'
      }
    ]
  },
  {
    date: '2020-01-17',
    amountTotal: 94080,
    items: [
      {
        status: 'COMPLETED',
        actor: 'Lelo Desenv Ltda',
        amount: 56000,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        scheduled: false,
        dateEvent: '2020-01-17T00:00:00Z'
      },
      {
        status: 'COMPLETED',
        actor: 'Lola Camisaria',
        amount: 12000,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        scheduled: false,
        dateEvent: '2020-01-17T00:00:00Z'
      },
      {
        status: 'REFUNDED',
        actor: 'Lelo Desenv Ltda',
        amount: 56000,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'CREDIT',
        scheduled: false,
        dateEvent: '2020-01-17T00:00:00Z'
      },
      {
        status: 'COMPLETED',
        actor: 'Tereza da Silva',
        amount: 1000,
        source: 'PAYMENT',
        type: 'BANKSLIP',
        entry: 'CREDIT',
        scheduled: false,
        dateEvent: '2020-01-17T21:00:00Z'
      }
    ]
  },
  {
    date: '2020-04-20',
    amountTotal: 83080,
    items: [
      {
        status: 'COMPLETED',
        actor: 'Giovanna Bezerra',
        amount: 1000,
        source: 'TRANSFER',
        type: 'EXTERNAL',
        entry: 'DEBIT',
        scheduled: false,
        dateEvent: '2020-04-20T00:00:00Z'
      },
      {
        status: 'COMPLETED',
        actor: 'Felipe Garcia',
        amount: 50000,
        source: 'PAYMENT',
        type: 'BANKSLIP',
        entry: 'CREDIT',
        scheduled: false,
        dateEvent: '2020-04-20T21:00:00Z'
      }
    ]
  },
  {
    date: '2020-04-24',
    amountTotal: 132080,
    items: [
      {
        status: 'COMPLETED',
        actor: 'Lola Camisaria',
        amount: 13580,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        scheduled: false,
        dateEvent: '2020-04-24T00:00:00Z'
      },
      {
        status: 'REFUNDED',
        actor: 'Felipe',
        amount: 2500,
        source: 'TRANSFER',
        type: 'EXTERNAL',
        entry: 'CREDIT',
        scheduled: false,
        dateEvent: '2020-04-24T00:00:00Z'
      }
    ]
  },
  {
    date: '2020-05-28',
    amountTotal: 121000,
    items: [
      {
        status: 'PENDING',
        actor: 'Lola Camisaria',
        amount: 33850,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        dateEvent: '2020-01-28T00:00:00Z',
        scheduled: true
      },
      {
        status: 'PENDING',
        actor: 'Lelo Desenv Ltda',
        amount: 50000,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        dateEvent: '2020-01-28T00:00:00Z',
        scheduled: true
      }
    ]
  },
  {
    date: '2020-06-30',
    amountTotal: 37150,
    items: [
      {
        status: 'PENDING',
        actor: 'Lelo Desenv Ltda',
        amount: 28050,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        dateEvent: '2020-01-30T00:00:00Z' as unknown as Date,
        scheduled: true
      }
    ]
  } as any
]

export const mockTransactionsModel = (): ITransactions => ({
  itemsTotal: faker.random.number(22),
  results: mockTransactionDay
})

export const mockTransactionScheduledDay: ITransactionsDay[] = [
  {
    date: '2020-05-28',
    amountTotal: 121000,
    items: [
      {
        status: 'PENDING',
        actor: 'Lola Camisaria',
        amount: 33850,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        dateEvent: '2020-01-28T00:00:00Z' as unknown as Date,
        scheduled: true
      },
      {
        status: 'PENDING',
        actor: 'Lelo Desenv Ltda',
        amount: 50000,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        dateEvent: '2020-01-28T00:00:00Z' as unknown as Date,
        scheduled: true
      }
    ]
  },
  {
    date: '2020-06-30',
    amountTotal: 37150,
    items: [
      {
        status: 'PENDING',
        actor: 'Lelo Desenv Ltda',
        amount: 28050,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        dateEvent: '2020-01-30T00:00:00Z' as unknown as Date,
        scheduled: true
      }
    ]
  } as any
]

export const mockTransactionsEntryDay: ITransactions[] = [
  {
    date: '2020-01-06',
    amountTotal: 128000,
    items: [
      {
        status: 'COMPLETED',
        actor: 'José Marques',
        amount: 13920,
        source: 'PAYMENT',
        type: 'BANKSLIP',
        entry: 'CREDIT',
        scheduled: false,
        dateEvent: '2020-01-06T21:00:00Z' as unknown as Date
      }
    ]
  },
  {
    date: '2020-01-17',
    amountTotal: 94080,
    items: [
      {
        status: 'REFUNDED',
        actor: 'Lelo Desenv Ltda',
        amount: 56000,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'CREDIT',
        scheduled: false,
        dateEvent: '2020-01-17T00:00:00Z' as unknown as Date
      }
    ]
  },
  {
    date: '2020-04-20',
    amountTotal: 83080,
    items: [
      {
        status: 'COMPLETED',
        actor: 'Felipe Garcia',
        amount: 50000,
        source: 'PAYMENT',
        type: 'BANKSLIP',
        entry: 'CREDIT',
        scheduled: false,
        dateEvent: '2020-04-20T21:00:00Z' as unknown as Date
      }
    ]
  },
  {
    date: '2020-04-24',
    amountTotal: 132080,
    items: [
      {
        status: 'REFUNDED',
        actor: 'Felipe',
        amount: 2500,
        source: 'TRANSFER',
        type: 'EXTERNAL',
        entry: 'CREDIT',
        scheduled: false,
        dateEvent: '2020-04-24T00:00:00Z' as unknown as Date
      }
    ]
  } as any
]

export const mockTransactionsOutDay: ITransactions[] = [
  {
    date: '2020-01-15',
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
        dateEvent: '2020-01-15T00:00:00Z'
      }
    ]
  },
  {
    date: '2020-01-17',
    amountTotal: 94080,
    items: [
      {
        status: 'COMPLETED',
        actor: 'Lelo Desenv Ltda',
        amount: 56000,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        scheduled: false,
        dateEvent: '2020-01-17T00:00:00Z'
      }
    ]
  },
  {
    date: '2020-04-20',
    amountTotal: 83080,
    items: [
      {
        status: 'COMPLETED',
        actor: 'Giovanna Bezerra',
        amount: 1000,
        source: 'TRANSFER',
        type: 'EXTERNAL',
        entry: 'DEBIT',
        scheduled: false,
        dateEvent: '2020-04-20T00:00:00Z'
      }
    ]
  },
  {
    date: '2020-04-24',
    amountTotal: 132080,
    items: [
      {
        status: 'COMPLETED',
        actor: 'Lola Camisaria',
        amount: 13580,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        scheduled: false,
        dateEvent: '2020-04-24T00:00:00Z'
      }
    ]
  },
  {
    date: '2020-05-28',
    amountTotal: 121000,
    items: [
      {
        status: 'PENDING',
        actor: 'Lola Camisaria',
        amount: 33850,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        dateEvent: '2020-01-28T00:00:00Z',
        scheduled: true
      }
    ]
  },
  {
    date: '2020-06-30',
    amountTotal: 37150,
    items: [
      {
        status: 'PENDING',
        actor: 'Lelo Desenv Ltda',
        amount: 28050,
        source: 'TRANSFER',
        type: 'INTERNAL',
        entry: 'DEBIT',
        dateEvent: '2020-01-30T00:00:00Z',
        scheduled: true
      }
    ]
  } as any
]
