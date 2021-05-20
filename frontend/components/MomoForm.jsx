import React, {useState} from 'react';
import styled from 'styled-components'
import InputElement from './InputElement'
import Button from './Button'

const MomoFormWrapper = styled.div`
    padding: 20px;
`




const MomoForm = ({data}) => {

    const [momoNumber, setMomoNumber] = useState("")

    const handleInputChange = (event) => {
        const number = event.target.value
        setMomoNumber(number)
        number.length > 10 ? setMomoNumber(number.slice(0,10)) : setMomoNumber(number)
    }

    const handleFormSubmit = () => {

    }
    
    return (
        <MomoFormWrapper>
            <form onSubmit={e => e.preventDefault()}>
                <InputElement value={momoNumber} label="MOBILE NUMBER" placeholder=" eg: 028 234 0943" containerStyle={{marginBottom: '20px'}} changeHandler={handleInputChange}/>
                <Button type="submit" onClick={() => handleFormSubmit}>Pay GHC {data.amount}</Button>
            </form>
        </MomoFormWrapper>
    );
}

export default MomoForm;
