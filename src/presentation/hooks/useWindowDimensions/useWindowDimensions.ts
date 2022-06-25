import { useState, useEffect } from 'react'
import {
  getWindowDimensions,
  IWindowDimensions
} from '@presentation/utils/dimensions/getWindowDimensions'

interface IUseWindowDimensionsHook {
  windowDimensions: IWindowDimensions
}

export const useWindowDimensions = (): IUseWindowDimensionsHook => {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>(
    getWindowDimensions()
  )

  useEffect(() => {
    windowEventListener()
    return () => removeWindomEventListener()
  }, [])

  const handleWindowResize = (): void => {
    setWindowDimensions(getWindowDimensions())
  }

  const windowEventListener = (): void => {
    window.addEventListener('resize', handleWindowResize)
  }

  const removeWindomEventListener = (): void => {
    window.removeEventListener('resize', handleWindowResize)
  }

  return {
    windowDimensions
  }
}
