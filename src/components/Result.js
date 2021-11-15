import React from 'react'
import { useSelector } from 'react-redux'

function Result() {
    const {actualOperation,result} = useSelector(state => state.calculReducer)
    return (
        <div>
            <div>operation en cours : 
                {actualOperation}
            </div>
            
            <div>resultat : 
                {result && result}
            </div>

        </div>
    )
}

export default Result
