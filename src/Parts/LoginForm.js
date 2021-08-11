import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/LoginForm.css';
import axios from 'axios';
import { Route, Redirect } from "react-router-dom";

import {Form, Button} from "react-bootstrap";

export default function LoginForm (){

    const [customers, setCustomers] = useState([]);
    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isValidUser, setIsValidUser] = useState(false);
    

    const onChangeContactNumber = (e) => {
        setContactNumber(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        axios.get('http://localhost/database_project/get_Customer_details.php')
        .then (res =>{
            // console.log(res.data);
            setCustomers(res.data)
        })
    }, []);

    const onSubmit =(e)=>{
        e.preventDefault();

        customers.forEach(customer => {

            if(contactNumber === customer.Contact_Number && password === customer.Password){
                setIsValidUser(true);
                console.log("Login success!");

                //Session object
                let userDetails = {
                    firstName: customer.First_Name,
                    contactNumber: customer.Contact_Number, 
                    gender: customer.Gender,
                    branchName: customer.Branch_Name,
                    logedInUser: true,
                }
                //Add the session
                localStorage.setItem('userDetails', JSON.stringify(userDetails));
                //get data in the session
                let data = localStorage.getItem('userDetails');
                data = JSON.parse(data);
                console.log(data);

            }

            

        })
    }


    
    return(
        <>
            <Form className="login-form" onSubmit={onSubmit} method="post">

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Control className="login-input" type="text" placeholder="Phone Number"  variant="success" name="contactNumber" value={contactNumber} onChange={onChangeContactNumber}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="login-input" type="password" placeholder="Password"  variant="success" name="password" value={password}  onChange={onChangePassword}/>
                </Form.Group>

                <Button href="" className="login-submit-btn login-input" type="submit"  variant="success">LOG IN</Button>

                <Route>
                    {isValidUser ? <Redirect to="/home" /> : null} 
                </Route>

            </Form>
        </>
    );
    
    
}



