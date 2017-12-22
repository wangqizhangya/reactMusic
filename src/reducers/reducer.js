import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import skipPage from './skipPage'
import skip from './skip'
import counter from './counter'

export default combineReducers({
	counter,
  	skipPage,
  	skip,
  	routing: routerReducer
  
})