import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose


const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(logger)
    ),
)

export default store
