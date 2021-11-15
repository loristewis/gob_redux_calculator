import { combineReducers } from 'redux'
import calculReducer from './calcul'
import errorReducer from './error'

export default combineReducers({
    calculReducer,
    errorReducer
})