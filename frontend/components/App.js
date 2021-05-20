import React from 'react'
import PaymentContainer from './PaymentContainer'
import LoadingContainer from './LoadingContainer'
import styled from 'styled-components'
import Pattern from '../icons/curved-pattern-blue.png'
import AxiosInstance from '../AxiosInstance'
import {useLocation} from 'react-router-dom';


const AppWrapper = styled.main`
    width: 100%;
    background-color: #eaf6fc;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-image: url(${props => props.img});
    background-position: 0 50px;
    background-repeat: repeat-x;
`


const App = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [paymentdata, setPaymentdata] = React.useState();
    const [hasError, setHasError] = React.useState(false);

    
    React.useEffect(async () => {
            const result = await AxiosInstance.get(`links.php?id=${window.location.search.split('=')[1]}`);
            setPaymentdata(result.data);
            setIsLoading(false);
        }, [])

    return (
    <AppWrapper img={Pattern}>
           { isLoading 
           ? <LoadingContainer error={hasError}/>
           : <PaymentContainer data={paymentdata}/>}
    </AppWrapper>
    )
}

export default App;