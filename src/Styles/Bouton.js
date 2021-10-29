import styled from "styled-components";

const Bouton = styled.button`
    color:'red';
    width:28%;
    height:30px;
    margin:5px;
`

const NumberContainer = styled.div`
    display:flex;
    width:15%;
    flex-wrap:wrap;
    justify-content:center;
`

const OperatorContainer = styled.div`
    display:flex;
    width:15%;
    justify-content:center;
`

export {Bouton,NumberContainer,OperatorContainer}