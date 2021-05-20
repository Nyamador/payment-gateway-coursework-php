import React from 'react';
import styled from 'styled-components';
import FlexColumn from './FlexColumn'
import LoaderIcon from '../icons/loading-alt.svg';

const LoadingWrapper = styled(FlexColumn)`
    width: 30%;
    background-color: white;
    margin: auto;
    min-height: 70%;
    border-radius: 4px;
    box-shadow: 0px 0px 7px 6px #c1c1c121;
    justify-content: center;
    text-align: center;
`

const LoadingContainer = ({error}) => {
    return (
        <LoadingWrapper>
                {error ? <p>An error occured</p> : <img src={LoaderIcon} height="50px"/>}
        </LoadingWrapper>
    );
}

export default LoadingContainer;
