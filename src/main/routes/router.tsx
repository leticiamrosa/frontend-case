import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

const Initial: React.FC = () => {
  return (
        <div>
            <h1>Initialddd Project</h1>
        </div>
  )
}

export const Router: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Initial}/>
        </Switch>
      </BrowserRouter>
  )
}
