import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import promiseMiddleware from "redux-promise-middleware"

import reducers from "./reducers"

const logger = createLogger({})

const initStore = (initialState = {}) => {
	return createStore(reducers, initialState, applyMiddleware(logger, thunk, promiseMiddleware))
}

export default initStore
