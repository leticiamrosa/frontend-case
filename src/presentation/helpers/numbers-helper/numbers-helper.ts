export const formatMoneyCentsToReal = (cents: number): string => {
  const number = cents / 100

  const result = number.toFixed(2)
    .replace('.', ',')
    .split('')
    .reverse()
    .map((v, i) => (i > 5 && (i + 6) % 3 === 0 ? `${v}.` : v))
    .reverse()
    .join('')

  return `${result}`
}
