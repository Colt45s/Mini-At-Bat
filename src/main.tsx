import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './components/App'
import 'semantic-ui-css/semantic.min.css'

const root = document.createElement('div')
document.body.appendChild(root)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
