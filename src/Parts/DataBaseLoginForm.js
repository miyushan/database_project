import React, { useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/DataBaseLoginForm.css';
import axios from 'axios';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from '../Context/UserContext';

import {Form, Button} from "react-bootstrap";

export default function DataBaseLoginForm (){
    const { setIsLogedIn } = useContext(UserContext);

    const [customers, setCustomers] = useState([]);
    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isValidUser, setIsValidUser] = useState();
    
    const loginNumber = '0773298953';
    const loginPW = '123';

    const onChangeContactNumber = (e) => {
        setContactNumber(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    // useEffect(() => {
    //     axios.get('http://localhost/database_project/get_Manager_details.php')
    //     .then (res =>{
    //         setCustomers(res.data)
    //     })
    // }, []);

    const onSubmit =(e)=>{
        e.preventDefault();

        // customers.forEach(customer => {

            if(contactNumber === loginNumber && password === loginPW ){
                setIsValidUser(true);
                console.log("DB Login success!");

                //Session object
                let userDetails = {
                    admin_contactNumber: contactNumber
                }

                setIsLogedIn(true);

                //Add the session
                localStorage.setItem('managerDetails', JSON.stringify(userDetails));
            }else if(contactNumber === '' && password !== '' ){
                alert('Phone number is required!');
            }else if(contactNumber === '' && password === '' ){
                alert('Login fields are empty!');
            }else if(contactNumber === loginNumber && password !== loginPW ){
                if(password === ''){
                    alert('Password is Empty!');
                }else{
                    alert('Password is wrong!');
                }
            }else{
                alert('Invalid Login!')
            }

        // })
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
                    {isValidUser ? <Redirect to="/db/branch" /> : null} 
                </Route>

            </Form>
        </>
    );
    
    
}



