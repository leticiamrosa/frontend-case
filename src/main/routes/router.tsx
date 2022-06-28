import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'

import { nameRoutes } from './name-routes'
import history from './history'

import { makeDefaultErrorPage, makeStatementPage } from '../factories/pages/'

export const Routes: React.FC = () => {
  return (
    <Router history={history as any}>
      <Switch>
        <Route
          exact
          path={nameRoutes.STATEMENT}
          component={makeStatementPage}
          key={nameRoutes.STATEMENT}
        />
        <Route component={makeDefaultErrorPage} key="Error4040" />
      </Switch>
    </Router>
  )
}
