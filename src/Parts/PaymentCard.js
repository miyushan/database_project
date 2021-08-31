import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PaymentCard.css';
import axios from 'axios';
import { CartContext } from '../Context/CartContext';
import {Form, Container, Button, Row, Col} from "react-bootstrap";

function PaymentCard(){
    const { totalWeight, totalPrice } = useContext(CartContext);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setcvc] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const onChangeCardNumber = (e) => {
        setCardNumber(e.target.value);
    }

    const onChangeDate = (e) => {
        setDate(e.target.value);
    }

    const onChangecvv = (e) => {
        setcvc(e.target.value);
    }

    const changeProductDetails = (id) => {

    }

    const addtoOrderList = () => {
        console.log(totalPrice+"\t"+totalWeight)
        axios.post('http://localhost/database_project/create_New_Order.php',{
            quantity: totalWeight,
            cost: totalPrice,
            customerId: 1,
            managerId: 2,
            deliveryPersonId: 3,
        })
        .then(()=>{
            localStorage.removeItem('cartDetails');
            console.log('hello');
            setName('');
            setAddress('');
            setCardNumber('');
            setDate('');
            setcvc('');
        });
    }

    const onPayNow =(e)=>{
        e.preventDefault();
        addtoOrderList();
        // if(name && address && cardNumber && date && cvv){
        //     e.preventDefault();
        //     addtoOrderList();
        // }else{
        //     console.log('error');
        //     e.preventDefault();
        // }
    }

    return(
        <>
            <Container className="form-container">
                <Form className="payment-form" onSubmit={onPayNow} method="post">
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
                            <Form.Control className="login-input btn-square" placeholder="00/00" value={date} onChange={onChangeDate}/>
                            </Form.Group>
                        </Col>
                        <Col xs={{ span: 4, offset: 3 }}>
                            <Form.Group controlId="formGridCVV">
                            <Form.Label className="payment-field-title">CVV</Form.Label>
                            <Form.Control className="login-input btn-square" placeholder="123" value={cvv} onChange={onChangecvv}/>
                            </Form.Group>
                        </Col>
                        
                    </Row>

                    <div className=" mb-1 ">
                        <Button className="login-submit-btn login-input pay-now-btn" type="submit">PAY NOW</Button>
                    </div>

                </Form>

                

            </Container>
            
        </>
    );
}

export default PaymentCard;