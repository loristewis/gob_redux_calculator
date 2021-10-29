import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {Bouton,NumberContainer,OperatorContainer} from '../Styles/Bouton'
function Calculator() {
    const dispatch = useDispatch()
    const {actualOperation} = useSelector(state => state.calculReducer)
    const lastCharacter = actualOperation[actualOperation.length-1]
    const isNotOperator = !(lastCharacter==="*") && !(lastCharacter==="-") && !(lastCharacter==="+")
    
    function addition() {
        if(isNotOperator) {
            dispatch({type:"ADDITION"})
        }
    }
    function soustraction() {
        if(isNotOperator) {
            dispatch({type:"SOUSTRACTION"})
        } 
    }
    function multiplication() {
        if(isNotOperator && actualOperation.length>0) {
            dispatch({type:"MULTIPLICATION"})
        }
    }
    function number(number) {
        dispatch({type:"NUMBER",number})
    }
    
    return (
        <div>
            <NumberContainer>
                {[1,2,3,4,5,6,7,8,9,0].map((el,i) => (
                    <Bouton key={i} onClick={() => number(i)}>{el}</Bouton>
                ))}
            </NumberContainer>
            <OperatorContainer>
                <Bouton onClick={addition}>+</Bouton>
                <Bouton onClick={soustraction}>-</Bouton>
                <Bouton onClick={multiplication}>x</Bouton>
            </OperatorContainer>
        </div>
       
    )

}
export default Calculator
