import React, { useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/LoginForm.css';
import axios from 'axios';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from '../Context/UserContext';

import {Form, Button} from "react-bootstrap";

export default function LoginForm (){
    const { setIsLogedIn } = useContext(UserContext);

    const [customers, setCustomers] = useState([]);
    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isValidUser, setIsValidUser] = useState();
    

    const onChangeContactNumber = (e) => {
        setContactNumber(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        localStorage.removeItem('userDetails');
        localStorage.removeItem('cartDetails');
        axios.get('http://localhost/database_project/get_Customer_details.php')
        .then (res =>{
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
                    id: customer.id,
                    firstName: customer.First_Name,
                    contactNumber: customer.Contact_Number, 
                    gender: customer.Gender,
                    branchName: customer.Branch_Name,
                    logedInUser: true,
                }

                setIsLogedIn(true);

                //Add the session
                localStorage.setItem('userDetails', JSON.stringify(userDetails));

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



