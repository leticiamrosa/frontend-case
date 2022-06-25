export enum FontSizeType {
  EXTRA_SMALL = 'extra-small',
  SMALL = 'small',
  REGULAR = 'regular',
  MEDIUM = 'medium',
}

export enum FontWeightType {
  REGULAR = 'regular',
  MEDIUM = 'medium',
  BOLD = 'bold',
}

export const fontSizes = {
  /** 10px */
  _10: '0.625rem',
  /** 12px */
  _12: '0.75rem',
  /** 14px */
  _14: '0.875rem',
  /** 16px */
  _16: '1.000rem',
  /** 20px */
  _20: '1.25',
  /** 22px */
  _22: '1.375rem',
  /** 24px */
  _24: '1.500rem',
  /** 32px */
  _32: '2.000rem',
  /** 40px */
  _40: '2.500rem'
}

export const fontWeight = {
  REGULAR: 400,
  MEDIUM: 600,
  BOLD: 900
}

export const fontSizeVariant = {
  [FontSizeType.EXTRA_SMALL]: fontSizes._12,
  [FontSizeType.SMALL]: fontSizes._14,
  [FontSizeType.REGULAR]: fontSizes._16,
  [FontSizeType.MEDIUM]: fontSizes._22
}

export const fontLineHeightVariant = {
  [FontSizeType.EXTRA_SMALL]: fontSizes._20,
  [FontSizeType.SMALL]: fontSizes._20,
  [FontSizeType.REGULAR]: fontSizes._24,
  [FontSizeType.MEDIUM]: fontSizes._32
}

export const fontWeightVariant = {
  [FontWeightType.REGULAR]: fontWeight.REGULAR,
  [FontWeightType.MEDIUM]: fontWeight.MEDIUM,
  [FontWeightType.BOLD]: fontWeight.BOLD
}
