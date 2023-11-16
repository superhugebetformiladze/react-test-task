import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '@redux/reducers/rootReducer'
import { loggerMiddleware } from '@redux/middlewares/loggerMiddleware'

const middleware = [thunk, loggerMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store
