import {combineReducers} from 'redux'

import cart from './cart/reducer'
//para importar outros reducers

export default combineReducers({
  cart,
})