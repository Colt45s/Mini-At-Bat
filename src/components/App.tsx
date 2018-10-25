import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import { Redirect, Router } from 'react-router-dom'
import { history } from '../store'
import Standing from './pages/Standing'
import PageTemplate from './templates/PageTemplate'

const App = () => (
  <Router history={history}>
    <PageTemplate
      children={
        <Switch>
          <Route
            exact={true}
            path="/"
            component={() => <Redirect to="/standings" />}
          />
          <Route path="/standings" component={Standing} />
        </Switch>
      }
    />
  </Router>
)

export default hot(module)(App)
