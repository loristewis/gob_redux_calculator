
import {ADDITION,SOUSTRACTION,MULTIPLICATION,NUMBER,RESULT,RESET} from '../constants/actions'

const stateInit = {
    actualOperation:"",
    result:null
}

export default function calculReducer(state=stateInit,action) {
    const lastCharacter = state.actualOperation[state.actualOperation.length-1]
    const isNotLastOperator = !(lastCharacter==="*") && !(lastCharacter==="-") && !(lastCharacter==="+")
  
    switch(action.type) {
        case ADDITION:
            return {
                ...state,
                actualOperation: state.actualOperation+"+"
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
            const {number} = action.payload
            return {
                ...state,
                actualOperation:state.actualOperation+number
            } 

        case RESULT:
            return {
                ...state,
                result:isNotLastOperator ? eval(state.actualOperation) : eval(state.actualOperation.slice(0,-1))
            } 
        case RESET:
            return {
                ...state,
                actualOperation:"",
                result:null
            } 
        default:
            return state
    }
}