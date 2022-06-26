import faker from 'faker'
import { RemoteTransactions } from '../../../data/usecases/transactions/remote-transactions'
import { HttpClientSpy } from '@tests/data/mocks/'
import { mockTransactionsModel } from '@tests/domain/mocks'
import { HttpStatusCode } from '@data/protocols/http'
import { GenericError } from '@domain/errors/generic-error'
import { Transaction } from '@domain/usecases/transactions'

type SystemUnderTestTypes = {
  systemUnderTest: RemoteTransactions
  httpClientSpy: HttpClientSpy<Transaction.Model>
}

const fakeUrl = faker.internet.url()

const makeSystemUnderTest = (url: string = fakeUrl): SystemUnderTestTypes => {
  const httpClientSpy = new HttpClientSpy<Transaction.Model>()
  const systemUnderTest = new RemoteTransactions(url, httpClientSpy)

  return {
    httpClientSpy,
    systemUnderTest
  }
}

describe('RemoteTransactions', () => {
  describe('HttpGetClient', () => {
    test('should call HttpGetClient with correct URL', async () => {
      // given
      const url = faker.internet.url()
      const { systemUnderTest, httpClientSpy } = makeSystemUnderTest(url)

      // when
      await systemUnderTest.getTransactions()

      // then
      expect(httpClientSpy.url).toBe(url)
    })
  })

  describe('HttpPostClient return success', () => {
    test('should return an Transaction when HttpGetClient returns 200', async () => {
      // given
      const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
      const httpResult = mockTransactionsModel()
      httpClientSpy.response = {
        statusCode: HttpStatusCode.OK,
        data: httpResult
      }

      // when
      const transactions = await systemUnderTest.getTransactions()

      // then
      expect(transactions).toEqual(httpResult)
    })
  })

  describe('HttpGetClient returns error', () => {
    test('should throw a GenericError when HttpGetClient not return 200', async () => {
      // given
      const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
      httpClientSpy.response = {
        statusCode: HttpStatusCode.SERVER_ERROR
      }

      // when
      await systemUnderTest.getTransactions().then(async (result) => {
        // then
        await expect(result).rejects.toThrowError(new GenericError())
      }).catch((error) => {
        expect(error).toEqual(new GenericError())
      })
    })

    test('should throw a GenericError when HttpGetClient not return a data', async () => {
      // given
      const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
      httpClientSpy.response = {
        statusCode: HttpStatusCode.SERVER_ERROR,
        data: null
      }

      // when
      await systemUnderTest.getTransactions().then(async (result) => {
        // then
        await expect(result).rejects.toThrowError(new GenericError())
      }).catch((error) => {
        expect(error).toEqual(new GenericError())
      })
    })
  })
})
