import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { capitalizeFirstLetter } from '../string-helper'

const adjustForUTCOffset = (date: Date): Date => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
}

export const formatDate = (
  date: Date | string,
  desiredFormat: string,
  locale?: Locale
): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  const dateWithOffset = adjustForUTCOffset(parsedDate)

  if (locale) {
    return format(dateWithOffset, desiredFormat, { locale })
  }

  return format(dateWithOffset, desiredFormat)
}

export const formatDateBR = (date: Date | string, desiredFormat: string): string => {
  return formatDate(date, desiredFormat, ptBR)
}

export const formattedDateDisplay = (date: Date): string => {
  if (!date) return

  const day = formatDate(date, 'd')
  const month = formatDateBR(date, 'MMM')
  const year = formatDate(date, 'yyyy')
  const hour = formatDate(date, 'HH')
  const minute = formatDate(date, 'mm')

  const formattedMonth = capitalizeFirstLetter(month)

  const textDate = `${day} ${formattedMonth} ${year}`
  const textTime = `${hour}:${minute}`

  return `${textDate} - ${textTime}`
}

export const formattedDayDate = (date: Date): string => {
  if (!date) return

  const day = formatDate(date, 'd')
  const month = formatDateBR(date, 'MMMM')

  const formattedMonth = capitalizeFirstLetter(month)

  return `${day} de ${formattedMonth}`
}
