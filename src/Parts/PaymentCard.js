import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PaymentCard.css';
import {Form, Container, Button, Row, Col} from "react-bootstrap";
import { LoginDetailsContext } from '../Context/LoginDetailsContext';

function PaymentCard(){

    const { isLogedIn, setIsLogedIn } = useContext(LoginDetailsContext);

  
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [cvc, setcvc] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const onChangeCardNumber = (e) => {
        setCardNumber(e.target.value);
    }

    const onChangeMonth = (e) => {
        setMonth(e.target.value);
    }

    const onChangeDate = (e) => {
        setDate(e.target.value);
    }

    const onChangecvc = (e) => {
        setcvc(e.target.value);
    }

    const onPayNow =(e)=>{
        localStorage.removeItem('cartDetails');
        localStorage.removeItem('priceDetails'); 
        console.log('hello')
        e.preventDefault(); 
        setIsLogedIn(false); 
        setName('');
        setAddress('');
        setCardNumber('');
        setDate('');
        setMonth('');
        setcvc('');
    }

    return(
        <>
            <Container className="form-container">
                <Form className="payment-form">
                    <Row className="mt-1 mb-4">
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label className="payment-field-title">Name On The Card</Form.Label>
                        <Form.Control className="login-input btn-square" type="text" placeholder="Shane Watson" name="contactNumber" value={name} onChange={onChangeName}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-4" controlId="formGridAddress">
                        <Form.Label className="payment-field-title">Address</Form.Label>
                        <Form.Control className="login-input btn-square" placeholder="12 Main Street Colombo" value={address} onChange={onChangeAddress} />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formGridCardNumber">
                        <Form.Label className="payment-field-title">Card Number</Form.Label>
                        <Form.Control className="login-input btn-square" placeholder="0000-0000-0000-0000" value={cardNumber} onChange={onChangeCardNumber}/>
                    </Form.Group>

                    <Row className="mb-4">
                        <Col xs={5}>
                            <Form.Group  controlId="formGridExpireDate">
                            <Form.Label className="payment-field-title">Expiration Date</Form.Label>
                            <Form.Control className="login-input btn-square" placeholder="00/00" value={month} onChange={onChangeMonth}/>
                            </Form.Group>
                        </Col>
                        <Col xs={{ span: 4, offset: 3 }}>
                            <Form.Group controlId="formGridCVV">
                            <Form.Label className="payment-field-title">CVV</Form.Label>
                            <Form.Control className="login-input btn-square" placeholder="123" value={cvc} onChange={onChangecvc}/>
                            </Form.Group>
                        </Col>
                        
                    </Row>

                    <div className=" mb-1 ">
                        <Button onSubmit={onPayNow} className="login-submit-btn login-input pay-now-btn" type="submit">PAY NOW</Button>
                    </div>

                </Form>

                

            </Container>
            
        </>
    );
}

export default PaymentCard;