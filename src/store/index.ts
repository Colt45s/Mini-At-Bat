import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

export const history = createHistory()

const getMiddlewares = () => {
  return process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : applyMiddleware(thunk, createLogger())
}

export const store = createStore(reducer, getMiddlewares())
