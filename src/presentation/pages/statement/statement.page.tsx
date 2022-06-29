import React from 'react'
import { Header } from '@presentation/components/design-system'
import { PageWrapper } from '@presentation/components/common'
import { StatementContainer } from '@presentation/pages/statement/statement.container'

export const StatementPage: React.FC = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <StatementContainer />
      </PageWrapper>
    </>
  )
}
