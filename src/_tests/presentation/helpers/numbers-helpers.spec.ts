import { formatMoneyCentsToReal } from '@presentation/helpers/numbers-helper'

describe('Number Helpers', () => {
  describe('formatMoneyCentsToReal', () => {
    test('formatMoneyCentsToReal' , () => {
      // given
      const amount = 13920
      const expectedAmount = '139,20'

      // when
      const result = formatMoneyCentsToReal(amount)

      // then
      expect(result).toEqual(expectedAmount)
    })
  })
})
