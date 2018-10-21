import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import { Router } from 'react-router-dom'
import Home from '../components/pages/Home'
import { history } from '../store'
import PageTemplate from './templates/PageTemplate'

const App = () => (
  <Router history={history}>
    <PageTemplate
      children={
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      }
    />
  </Router>
)

export default hot(module)(App)
