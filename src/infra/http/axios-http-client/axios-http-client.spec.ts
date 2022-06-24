import axios from 'axios'
import { AxiosHttpClient } from '@infra/http/axios-http-client/axios-http-client'
import { mockAxios, mockHttpResponse } from '@infra/test/mock-axios'
import { mockGetRequest } from '@data/test'

jest.mock('axios')

interface SystemUnderTestTypes {
  systemUnderTest: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSystemUnderTest = (): SystemUnderTestTypes => {
  const systemUnderTest = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return {
    systemUnderTest,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct values', async () => {
    // given
    const request = mockGetRequest()
    const { systemUnderTest, mockedAxios } = makeSystemUnderTest()

    // when
    await systemUnderTest.get(request)

    // then
    expect(mockedAxios.get).toHaveBeenCalledWith(request.url)
  })

  test('should return the correct statusCode and body', () => {
    // given
    const request = mockGetRequest()
    const { systemUnderTest, mockedAxios } = makeSystemUnderTest()
    const expectedResult = mockedAxios.get.mock.results[0].value

    // when
    const result = systemUnderTest.get(request)

    // then
    expect(result).toEqual(expectedResult)
  })

  test('should return the correct statusCode and fata when fails', async () => {
    // given
    const request = mockGetRequest()
    const { systemUnderTest, mockedAxios } = makeSystemUnderTest()
    mockedAxios.get.mockRejectedValueOnce({
      response: mockHttpResponse
    })
    const expectedResult = mockedAxios.get.mock.results[0].value

    // when
    const result = systemUnderTest.get(request)

    // then
    expect(result).toEqual(expectedResult)
  })
})
