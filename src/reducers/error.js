
import {
    BEGINWITHMULTIPLICATION,
    MULTIPLEOPERATORS,
    NOERROR
} from '../constants/actions'
const stateInit = {
    errorMessage:""
}

export default function errorReducer(state=stateInit,action) {
    switch(action.type) {
        case BEGINWITHMULTIPLICATION:
            return {
                ...state,
                errorMessage:"Une operation ne peut pas commencer par un operateur multiplication"
            } 
        case MULTIPLEOPERATORS:
            return {
                ...state,
                errorMessage:"Il ne peut pas y avoir plusieurs operateurs de suite"
            } 
        case NOERROR:
            return {
                ...state,
                errorMessage:""
            }
        default:
            return {
                errorMessage:""
            }
    }
}