import axios from 'axios'
import faker from 'faker'

export const mockHttpResponse = (): any => ({
  data: faker.random.objectElement(),
  status: faker.random.number
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  const mockedResponse = mockHttpResponse()

  mockedAxios.request.mockClear().mockResolvedValue(mockedResponse)

  return mockedAxios
}
