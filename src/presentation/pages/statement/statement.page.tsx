import React from 'react'
import { Header } from '@presentation/components/design-system'
import { PageWrapper } from '@presentation/components/common'
import { Statement } from '@presentation/pages/statement/statement'

export const StatementPage: React.FC = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Statement />
      </PageWrapper>
    </>
  )
}
