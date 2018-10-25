import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App'
import { store } from './store'

document.getElementsByTagName('body')[0].style.backgroundColor = '#fcfcfc'
const root = document.createElement('div')
document.body.appendChild(root)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
