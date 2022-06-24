import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import { makeStatementPage } from '../factories/pages/'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={makeStatementPage} />
      </Switch>
    </BrowserRouter>
  )
}
