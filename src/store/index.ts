import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers'

export const history = createHistory()

const getMiddlewares = () => {
  return process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : applyMiddleware(thunk, createLogger())
}

export const store = createStore(reducer, getMiddlewares())
