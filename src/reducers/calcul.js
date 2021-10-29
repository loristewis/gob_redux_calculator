
import {ADDITION,SOUSTRACTION,MULTIPLICATION,NUMBER} from '../constants/actions'

const stateInit = {
    actualOperation:""
}

export default function calculReducer(state=stateInit,action) {
    switch(action.type) {
        case ADDITION:
            return {
                ...state,
                actualOperation:state.actualOperation+"+"
            }
        case SOUSTRACTION:
            return {
                ...state,
                actualOperation:state.actualOperation+"-"
            }
        case MULTIPLICATION:
            return {
                ...state,
                actualOperation:state.actualOperation+"*"
            }
        case NUMBER:
            return {
                ...state,
                actualOperation:state.actualOperation+action.number
            } 
        default:
            return state
    }
}