export class GenericError extends Error {
  constructor () {
    super('Something wrong happened, try again please!')
    this.name = 'GenericError'
  }
}
