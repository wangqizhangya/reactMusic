import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import skipPage from './skipPage'
import skip from './skip'


export default combineReducers({

  	skipPage,
  	skip,
  	routing: routerReducer
  
})