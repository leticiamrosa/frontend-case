import { useMediaQuery } from 'react-responsive'

export const isDesktop = (): boolean => {
  return useMediaQuery({ minWidth: 992 })
}

export const isTablet = (): boolean => {
  return useMediaQuery({ minWidth: 768, maxWidth: 991 })
}

export const isMobile = (): boolean => {
  return useMediaQuery({ maxWidth: 767 })
}

export const isDefault = (): boolean => {
  return useMediaQuery({ minWidth: 768 })
}
