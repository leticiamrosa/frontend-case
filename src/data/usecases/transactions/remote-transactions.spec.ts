import faker from 'faker'
import { RemoteTransactions } from './remote-transactions'
import { HttpGetClientSpy } from '@data/test'
import { ITransactions } from '@domain/models/transactions'
import { mockTransactionsModel } from '@domain/test/transactions/mock-transactions'
import { HttpStatusCode } from '@data/protocols/http'
import { GenericError } from '@domain/errors/generic-error'

type SystemUnderTestTypes = {
  systemUnderTest: RemoteTransactions
  httpGetClientSpy: HttpGetClientSpy<ITransactions>
}

const fakeUrl = faker.internet.url()

const makeSystemUnderTest = (url: string = fakeUrl): SystemUnderTestTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<ITransactions>()
  const systemUnderTest = new RemoteTransactions(url, httpGetClientSpy)

  return {
    httpGetClientSpy,
    systemUnderTest
  }
}

describe('RemoteTransactions', () => {
  describe('HttpGetClient', () => {
    test('should call HttpGetClient with correct URL', async () => {
      // given
      const url = faker.internet.url()
      const { systemUnderTest, httpGetClientSpy } = makeSystemUnderTest(url)

      // when
      await systemUnderTest.getTransactions()

      // then
      expect(httpGetClientSpy.url).toBe(url)
    })
  })

  describe('HttpPostClient return success', () => {
    test('should return an Transaction when HttpGetClient returns 200', async () => {
      // given
      const { systemUnderTest, httpGetClientSpy } = makeSystemUnderTest()
      const httpResult = mockTransactionsModel()
      httpGetClientSpy.response = {
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
      const { systemUnderTest, httpGetClientSpy } = makeSystemUnderTest()
      httpGetClientSpy.response = {
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
      const { systemUnderTest, httpGetClientSpy } = makeSystemUnderTest()
      httpGetClientSpy.response = {
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
