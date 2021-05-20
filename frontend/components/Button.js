import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.button`
    background: linear-gradient(
    180deg
    ,#50bef9 0,#0793e0);
    // background: #44b669;
    border-color: #44b6f4;
    border: none;
    border-radius: 2px;
    width: 100%;
    padding: 16px;
    color: white;
    min-width: 64px;
    font-weight: bold;
    border-radius: 4px;
    outline: #d3e7fe;
    cursor: pointer;
    box-shadow: 0px 3px 6px  #cbcbcb87;

    &:active {
        transform: scale(0.99);
        outline: #d3e7fe;
    }
`


const Button = ({children, clickHandler}) => {
    return(
        <Wrapper onClick={clickHandler}>
                {children}
        </Wrapper>
    )
}

export default Button