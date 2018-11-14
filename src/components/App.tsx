import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { history } from '../store'
import Layout from './layout'
import Standing from './pages/Standing'

const App = () => (
  <Router history={history}>
    <Layout
      children={
        <Switch>
          <Route
            exact={true}
            path="/"
            component={() => <Redirect to="/standings" />}
          />
          <Route path="/standings" component={Standing} />
          <Route path="*" component={Standing} />
        </Switch>
      }
    />
  </Router>
)

export default hot(module)(App)
