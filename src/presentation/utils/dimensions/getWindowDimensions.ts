export interface IWindowDimensions {
  width: number
  height: number
}

export const getWindowDimensions = (): IWindowDimensions => {
  const { innerWidth: width, innerHeight: height } = window

  return {
    width,
    height
  }
}
