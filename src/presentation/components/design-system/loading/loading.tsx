import React from 'react'
import IconLoading from '@presentation/assets/images/icons/ico-loading.svg'
import { colors } from '@presentation/styles/theme'
import { Icon } from '../icon/icon'

import Styled from './loading.styles'

const ICON_HEIGHT = 80

export const Loading: React.FC = () => {
  return <Styled.LoadingWrapper><Icon icon={IconLoading} backgroundColor={colors.WHITE} iconHeight={ICON_HEIGHT}/></Styled.LoadingWrapper>
}
