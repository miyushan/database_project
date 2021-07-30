import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/LoginForm.css';
import axios from 'axios';
import { Route, Redirect } from "react-router-dom";

import {Form, Button} from "react-bootstrap";

export default class LoginForm extends Component {

    constructor(props){
        super(props);

        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            contactNumber: '',
            branchName: '',
            password: '',
            address: '',
            isValidUser: false
        }
    }

    onChangeContactNumber(e){
        this.setState({
            contactNumber: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        axios.get('http://localhost/database_project/viewData.php')
        .then(res => res.data)
        .then((res) => {

            res.forEach(elements => {
                if((elements.Contact_Number === this.state.contactNumber) && (elements.Password===this.state.password)){
                    
                    this.setState({
                        firstName: elements.First_Name,
                        lastName: elements.Last_Name,
                        gender: elements.Gender,
                        contactNumber: elements.Contact_Number,
                        branchName: elements.Branch_Name,
                        password: elements.Password,
                        address: elements.Address,
                        isValidUser: true
                    })
                    // console.log(this.state);

                    const obj = {
                        firstName: elements.Last_Name,
                        lastName: elements.First_Name,
                        gender: elements.Gender,
                        contactNumber: elements.Contact_Number,
                        branchName: elements.Branch_Name,
                        password: elements.Password,
                        address: elements.Address,
                    }
                    const obj_json = JSON.stringify(obj);
                    console.log(obj);
                    
                    axios.post('http://localhost/database_project/user_details.php', obj_json)
                    .then(res => {
                        console.log(res.data);
                    });
                }
            });
        });

    }


    render() {
        return(
            <>
                <Form className="login-form" onSubmit={this.onSubmit} method="post">
    
                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Control className="login-input" type="text" placeholder="Phone Number"  variant="success" name="contactNumber" value={this.state.contactNumber} onChange={this.onChangeContactNumber}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className="login-input" type="password" placeholder="Password"  variant="success" name="password" value={this.state.password}  onChange={this.onChangePassword}/>
                    </Form.Group>
    
                    <Button href="" className="login-submit-btn login-input" type="submit"  variant="success">LOG IN</Button>

                    <Route>
                        {this.state.isValidUser ? <Redirect to="/home" /> : null} 
                    </Route>

                </Form>
            </>
        );
    }
    
}



