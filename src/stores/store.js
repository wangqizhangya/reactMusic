import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router';
import {routerMiddleware,routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/reducer'
const middleware = routerMiddleware(browserHistory)
const store = createStore(
	reducer,
	applyMiddleware(middleware),
    applyMiddleware(thunk)
    
)

export { store }
