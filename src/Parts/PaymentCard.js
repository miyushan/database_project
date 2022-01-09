import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PaymentCard.css';
import axios from 'axios';
import { CartContext } from '../Context/CartContext';
import { EmployeeContext } from '../Context/EmployeeContext';
import {Form, Container, Button, Row, Col} from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";

function PaymentCard(){
    const { totalWeight, setCartProducts, priceWithDiscount } = useContext(CartContext);
    const { managers } = useContext(EmployeeContext);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setcvc] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
    const [branch, setBranch] = useState('');
    const [customerId, setCustomerId] = useState('');

    // let dPersonId;
    let managerId;

    

    useEffect(() =>{
        try{
            let cartData = localStorage.getItem('cartDetails');
            cartData = JSON.parse(cartData);

            if (!cartData || cartData.length === 0) {
                setBtnDisable(true);
            }else{
                setBtnDisable(false);
            }

            //get user details
            let userData = localStorage.getItem('userDetails');
            userData = JSON.parse(userData);
            setBranch(userData.id);
            setCustomerId(userData.id);
        }catch(e){

        }
        
    },[])
    

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

    //find related Manager and Delivery Person relater to buyers Branch 
    const findRelatedEmployees = () => {
        // let tempDPsersons = [];
        let tempManagers = [];

        // //to get D Persons in same branch
        // deliveryPersons.forEach(person => {
        //     if(person.Branch_Name === branch){
        //         tempDPsersons.push(parseFloat(person.id));
        //     }
        // })
        // console.log(tempDPsersons);
        // dPersonId = tempDPsersons[ Math.floor(Math.random()*tempDPsersons.length) ];
        // console.log(dPersonId);

        //to get Managers in same branch
        managers.forEach(person => {
            if(person.Branch_id === branch){
                tempManagers.push(parseFloat(person.id));
            }
        })
        console.log(tempManagers);
        managerId = tempManagers[ Math.floor(Math.random()*tempManagers.length) ];
        console.log(managerId);
    }

    const addtoOrderList = () => {
        setCartProducts([]);
        findRelatedEmployees();
        axios.post('http://localhost:4000/orders',{
            quantity: totalWeight,
            cost: priceWithDiscount,
            customerId: customerId,
            managerId: managerId,
            // deliveryPersonId: dPersonId,
        })
        .then(()=>{
            localStorage.removeItem('cartDetails');
            alert('Order is successfully done!');
            setName('');
            setAddress('');
            setCardNumber('');
            setDate('');
            setcvc('');
            setIsPaymentSuccess(true);

            //add address to customer table
            axios.put(`http://localhost:4000/customer-address/${customerId}`,{
                id: customerId,
                Address: address,
            });
        });
    }

    const onPayNow =(e)=>{
        e.preventDefault();
        if(name && address && cardNumber && date && cvv){
            addtoOrderList();
            findRelatedEmployees();
        }else{
            alert('Please fill the required fields')
        }
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
                        <Button disabled={btnDisable} className="login-submit-btn login-input pay-now-btn" type="submit" variant="success">PAY NOW</Button>
                    </div>

                </Form>

                <Route>
                    {isPaymentSuccess ? <Redirect to="/home" /> : null} 
                </Route>
                

            </Container>
            
        </>
    );
}

export default PaymentCard;