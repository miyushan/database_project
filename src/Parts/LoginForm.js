import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/LoginForm.css';
import axios from 'axios';

import {Form, Button} from "react-bootstrap";

export default class LoginForm extends Component {

    constructor(props){
        super(props);

        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            contactNumber: '',
            password: ''
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
            console.log(this.state.contactNumber);

            res.forEach(elements => {
                console.log(elements.Contact_Number);
                console.log(elements.Password);
                if((elements.Contact_Number === this.state.contactNumber) && (elements.Password===this.state.password)){
                    window.location.replace('http://localhost:4008/home');
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
    
                </Form>
            </>
        );
    }
    
}



