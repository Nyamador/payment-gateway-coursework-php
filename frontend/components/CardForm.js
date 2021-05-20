import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import InputElement, {CardInputElement} from './InputElement'
import { isValid, isExpirationDateValid, isSecurityCodeValid, getCreditCardNameByNumber } from 'creditcard.js';
import Button from './Button'
import FlexRow from './FlexRow'
import LoaderIcon from '../icons/loading.svg';

const CardFormWrapper = styled.div`
    padding: 20px;
`

const MonthCvvWrapper = styled(FlexRow)`
    margin-bottom: 10px;
`
const LoadingBar = styled(FlexRow)`
    background: linear-gradient(
    180deg
    ,#50bef9 0,#0793e0);
        bckground: #44b669;
        border-color: #44b6f4;
    border-radius: 8px;
    width: fit-content;
    border-radius: 50%;
    justify-content: center;
    padding: 4px;
    align-items: center;
    margin: auto;
`

const CardForm = ({data}) => {
    const [cardNumber, setCardNumber] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [cardIssuer, setCardIssuer] = useState(getCreditCardNameByNumber(cardNumber))
    const [expiryHasError, setExpiryHasError] = useState(false)
    const [cvv, setCvv] = useState("")
    const [cvvIsValid, setCvvIsValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    // const formData = {
    //     cvv,
    //     cardNumber,
    //     expiryData,
    // }



    // const async fetchData = () => {
    //     const response = await fetch(`http://localhost:8000/api/v1/links/${window.location.pathname.split('/')[2]}/`, {
    //         method: 'GET',
    //         headers:{
    //             'Authorization': 'Token 11fd430bb58258c46f656613074376c8f17dfbdc'
    //         }
    //     })

    //     if(!response.ok){
    //         const message = "An error has occured"
    //         throw new Error(message)
    //     }
    //     const data = response.json()
    //     console.log(data.data)

    // }

    // useEffect(fetchData(), [])

    const handleCreditCardInputChange = (event) => { 
        setCardNumber(event.target.value);
    }

    const handleExpiryInputChange = (event) => {
        setExpiryDate(event.target.values)
    }

    const handleCVVInputChange = (event) => {
        setCvv(event.target.value)
    }

    return (
        <CardFormWrapper>
            <form onSubmit={e => e.preventDefault()}>
                <CardInputElement type="text" value={cardNumber} issuer_logo={cardIssuer} label="CARD NUMBER" placeholder="0000 0000 0000 0000" id="card_number" containerStyle={{marginBottom: '10px'}} changeHandler={handleCreditCardInputChange}/>
                

                <MonthCvvWrapper>
                    <InputElement type="text" name="cc_expiry" value={expiryDate} hasError={expiryHasError} label="EXPIRY DATE" placeholder="MM / YY" id="expiry_date" containerStyle={{ width: '50%', borderRight: '0px'}} changeHandler={handleExpiryInputChange}/>
                    <InputElement type="text" name="cvv" value={cvv} label="CVV" placeholder="123" id="cvv_number" containerStyle={{ width: '50%'}} changeHandler={handleCVVInputChange}/>
                </MonthCvvWrapper>
                {isLoading ? 
                    <LoadingBar>
                        <img src={LoaderIcon}/>
                    </LoadingBar>
                :
                <Button type="submit">{isLoading ? <LoaderIcon/> : `Pay GHC ${data.amount}`}</Button>
                }
            </form>
        </CardFormWrapper>
    );
}

export default CardForm;
