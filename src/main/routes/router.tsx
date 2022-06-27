import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { nameRoutes } from './name-routes'

import { makeDefaultErrorPage, makeStatementPage } from '../factories/pages/'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={nameRoutes.STATEMENT}
          component={makeStatementPage}
          key={nameRoutes.STATEMENT}
        />
        <Route component={makeDefaultErrorPage} key="Error4040" />
      </Switch>
    </BrowserRouter>
  )
}
