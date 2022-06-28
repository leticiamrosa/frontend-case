import { formattedDateDisplay, formattedDayDate } from '@presentation/helpers/date-helper/date-helper'

describe('Date Helpers', () => {
  describe('formattedDateDisplay', () => {
    it('should return a formatted date display when receive a date', () => {
      // given
      const date = new Date('2020-01-06T21:00:00Z')

      // when
      const result = formattedDateDisplay(date)
      // then

      expect(result).toEqual('6 Jan 2020 - 21:00')
    })

    it('should not return when there isnt a date', () => {
      // given

      // when
      const result = formattedDateDisplay(null)

      // then
      expect(result).toBeUndefined()
    })
  })

  describe('formattedDayDate', () => {
    it('should return a formatted day date when receive a date', () => {
      // given
      const date = new Date('2020-01-06')

      // when
      const result = formattedDayDate(date)

      // then
      expect(result).toEqual('6 de Janeiro')
    })

    it('should not return when there isnt a date', () => {
      // given

      // when
      const result = formattedDayDate(null)

      // then
      expect(result).toBeUndefined()
    })
  })
})
