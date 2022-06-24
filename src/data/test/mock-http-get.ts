import faker from 'faker'
import { HttpGetParams } from '@data/protocols/http'

export const mockPostRequest = (): HttpGetParams => ({
  url: faker.internet.url()
})
