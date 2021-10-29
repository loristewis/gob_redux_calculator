import React from 'react'
import { useSelector } from 'react-redux'

function Result() {
    const {actualOperation} = useSelector(state => state.calculReducer)
    const lastCharacter = actualOperation[actualOperation.length-1]
    const isNotOperator = !(lastCharacter==="*") && !(lastCharacter==="-") && !(lastCharacter==="+")
    let result = isNotOperator ? eval(actualOperation) :eval(actualOperation.slice(0,-1))
  
    return (
        <div>
            <div> operation en cours : 
                {actualOperation}
            </div>
            
            <div>resultat:
                {result}
            </div>

        </div>
    )
}

export default Result
