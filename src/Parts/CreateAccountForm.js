import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CreateAccountForm.css';
import {Form, Button, DropdownButton, Dropdown} from "react-bootstrap";
import axios from 'axios';
// import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';
// import CustomerDetails from '../DB_data/CustomerDetails';

import { Route, Redirect } from "react-router-dom";


export default function CreateAccountForm () {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [branchName, setBranchName] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const onChangeGender = (e) => {
        setGender(e.target.value);
    }

    const onChangeContactNumber = (e) => {
        setContactNumber(e.target.value);
    }

    const onChangeBranchName = (e) => {
        setBranchName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const checkNewUser = () => {
        axios.get('http://localhost/database_project/get_Customer_Details.php')
        .then(res => res.data)
        .then((res) => {

            let isNewNumber = true;

            try{
                res.forEach(phone => {
                    if(contactNumber === phone.Contact_Number){
                        isNewNumber = false;
                    }
                })
            }catch(e){

            }
            
            const obj = {
                firstName : firstName,
                lastName : lastName,
                gender : gender,
                contactNumber: contactNumber,
                branchName : branchName,
                password : password,
                isRegistered : false
            }
            const obj_json = JSON.stringify(obj);

            if(firstName.length===0 || lastName.length===0 || gender.length===0 || contactNumber.length===0 || branchName.length===0 || password.length===0){
                alert("All Fields should be filled!");
            }else{
                if(isNewNumber===true){
                    // pass new account details to db
                    axios.post('http://localhost/database_project/create_New_Customer.php', obj_json)
                    .then(res => {
                        console.log("New Account created");
                        setFirstName('');
                        setLastName('');
                        setGender('');
                        setContactNumber('');
                        setBranchName('');
                        setPassword('');
                        setIsRegistered(true);
                    }); 
                }else{
                    isNewNumber = true;
                    alert("User already Exist!");
                }
            }

        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        checkNewUser();
    }

        

    return (
        <>
        <Form className="login-form" onSubmit={onSubmit} method="post">

            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Control className="login-input" type="text" placeholder="First name" name="firstName" value={firstName} onChange={onChangeFirstName}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Control className="login-input" type="text" placeholder="Last name" name="lastName" value={lastName} onChange={onChangeLastName}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>


            <DropdownButton className="mb-3 dropdown-btn" title="Gender" variant="success">
                <Dropdown.Item className="login-input dropdown-btn-item">Male</Dropdown.Item>
                <Dropdown.Item className="login-input dropdown-btn-item">Female</Dropdown.Item>
            </DropdownButton>
            {/* <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Control className="login-input" type="text" placeholder="Gender" name="gender"  value={gender} onChange={onChangeGender}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control className="login-input" type="text" placeholder="Phone Number" name="contactNumber"  value={contactNumber} onChange={onChangeContactNumber}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBranchName">
                <Form.Control className="login-input" type="text" placeholder="Branch Name" name="branchName"  value={branchName} onChange={onChangeBranchName}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className="login-input" type="password" placeholder="Password" name="password"  value={password} onChange={onChangePassword}/>
            </Form.Group>

            <Button href="" className="login-submit-btn login-input" type="submit" name="createNewAccount">CREATE ACCOUNT</Button>

            <Route>
                {isRegistered? <Redirect to="/login" /> : null} 
            </Route>

        </Form>
        </>
    )
        
    
}



