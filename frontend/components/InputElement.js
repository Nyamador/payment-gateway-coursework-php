import React from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import styled from 'styled-components'

import FlexColumn from './FlexColumn'
import FlexRow from './FlexRow'

import visacard from '../icons/vs.svg'
import mastercard from '../icons/ms.svg'
import amex from '../icons/amex.png'
import cvvHelper from '../icons/cvv_helper.png'

const InputWrapper = styled(FlexColumn)`
    border: ${props => props.error ? "1px solid #e60023" : "1px solid #E1E1E1"};
    border-radius: 2px;
    padding: 8px;
    position: relative;
`

const Label = styled.label`
    color: #CBCBCB;
    margin-bottom: 4px;
`

const Input = styled.input`
    color: black;
    outline: none;
    border: none;
    transition: all 4s;
`

const InputElement = ({type, value, required, placeholder, id, label, containerStyle, changeHandler, hasError, name}) => {

    const [isCvvDialogOpen, setIsCvvDialogOpen] = React.useState(false)
    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

    return (
        <>
        <InputWrapper style={containerStyle} error={hasError} cvvDialog={isCvvDialogOpen}>
            <FlexRow>
                <Label htmlFor={id} className="font-s">{label}</Label>
                {label === "CVV" && <div className="font-xs ml-auto need_help" onClick={() => isCvvDialogOpen ? setIsCvvDialogOpen(false) : setIsCvvDialogOpen(true)}>HELP?</div>}
            </FlexRow>
            <Input name={name} className={isCvvDialogOpen && "cvv_input"} type={type} value={value} required={!required ? true : required} placeholder={placeholder} id={id} 
            {...name === "cc_expiry" && {...getExpiryDateProps({ onChange: changeHandler })} }
            {...name === "cvv" && {...getCVCProps({ onChange: changeHandler })} }
            onChange={changeHandler}
            />
            
            
            { isCvvDialogOpen &&
              <div className="cvv_dialog">
                    <button onClick={() => setIsCvvDialogOpen(false)}>
                        <div>x</div>
                    </button>
                    <div className="hint_image">
                        <img src={cvvHelper} />
                    </div>
                    <div className="hint_text">
                        <p>Your CVV is the 3 or 4-digit number on the back of your card (the side without the chip).</p>
                    </div>
              </div>}

        </InputWrapper>
        </>
    );
}

export default InputElement;


export const CardInputElement = ({type, value, required, placeholder, id, label, containerStyle, changeHandler, hasError, issuer_logo}) => {

    const { meta, getCardNumberProps, getCardImageProps } = usePaymentInputs();

    return (
        <InputWrapper style={containerStyle} error={hasError}>
            <Label htmlFor={id} className="font-s">{label}</Label>
            <FlexRow>
                <Input {...getCardNumberProps({onChange: changeHandler })} style={{width: '95%'}} type={type} value={value} required={!required ? true : required} placeholder={placeholder} id={id}/>
                <svg {...getCardImageProps({ images })} />
                {/* <img src={get_issuer_logo(issuer_logo)} height="20px"/> */}
            </FlexRow>
        </InputWrapper>
    );
}

