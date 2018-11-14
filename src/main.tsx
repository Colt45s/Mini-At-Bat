import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import { injectGlobal } from 'styled-components'
import App from './components/App'
import { store } from './store'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    background-color: #fcfcfc
  }
`

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
