import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { 
    add, 
    beginWithMultiplication,
    mult,
    multipleOperators,
    noError,
    remove,
    result,
    number,
    reset
} from '../actions/actions-types'
import {
    Bouton,
    NumberContainer,
    OperatorContainer,
    ErrorMessage
} from '../Styles/Bouton'

function Calculator() {
    const dispatch = useDispatch()
    const {actualOperation} = useSelector(state => state.calculReducer)
    const {errorMessage} = useSelector(state => state.errorReducer)
    const lastCharacter = actualOperation[actualOperation.length-1]
    const isNotLastOperator = !(lastCharacter==="*") && !(lastCharacter==="-") && !(lastCharacter==="+")
    
    function addition() {
        if(isNotLastOperator) {
            dispatch(add())
            dispatch(noError())
        } else {
            dispatch(multipleOperators())
        }
    }
    function soustraction() {
        if(isNotLastOperator) {
            dispatch(remove())
            dispatch(noError())

        } else {
            dispatch(multipleOperators())
        }
    }
    function multiplication() {
        if(isNotLastOperator && actualOperation.length>0) {
            dispatch(mult())
            dispatch(noError())
        } else if(!isNotLastOperator) {
            dispatch(multipleOperators())
        } else if(actualOperation.length<=0) {
            dispatch(beginWithMultiplication())
        }
    }
    function egal() {
        if(isNotLastOperator) {
            dispatch(result())
        }
    }
    function addNumber(nb) {
        const payload = {number:nb}
        dispatch(noError())
        dispatch(number(payload));
    }

    function resetResult() {
        dispatch(reset())
    }

    return (
        <div>
            <NumberContainer>
                {[1,2,3,4,5,6,7,8,9,0].map((el,i) => (
                    <Bouton key={i} onClick={() => addNumber(el)}>{el}</Bouton>
                ))}
            </NumberContainer>
            <OperatorContainer>
                <Bouton onClick={addition}>+</Bouton>
                <Bouton onClick={soustraction}>-</Bouton>
                <Bouton onClick={multiplication}>x</Bouton>
                <Bouton onClick={egal}>=</Bouton>
                <Bouton onClick={resetResult}>RESET</Bouton>
            </OperatorContainer>
            {errorMessage.length>0 && <ErrorMessage>{errorMessage}</ErrorMessage>}
       
        </div>
       
    )

}
export default Calculator
