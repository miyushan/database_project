import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/UpperNavBar.css';
import {Navbar, Container, Button} from "react-bootstrap";
import { ReactComponent as SignOut } from '../files/sign-out-alt-solid.svg';
import axios from 'axios';


export default class UpperNavBar extends Component{

    componentDidMount() {
        axios.get('http://localhost/database_project/viewData.php')
        .then(res => res.data)
        .then((res) => {
            // console.log(this.state.contactNumber);

            res.forEach(elements => {
                console.log(elements.Contact_Number);
                console.log(elements.Password);
                // if((elements.Contact_Number === this.state.contactNumber) && (elements.Password===this.state.password)){
                //     window.location.replace('http://localhost:4008/home');
                // }
            });
            
        });
    }

    render() {
        return(
            <Navbar className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-title-1" style={{textAlign:"left"}}>Kochchikade</Navbar.Brand>
                    <Navbar.Brand className="nav-title-1" style={{textAlign:"center"}}>Welcome Mr. Shakeer Miyushan</Navbar.Brand>
                    <Navbar.Brand className="nav-title-1" style={{textAlign:"right"}}>
                        <Button href="login" className="log-out-btn" variant="success">
                            <SignOut className="sign-out-btn" height="12px"/>Log Out
                        </Button>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
    
}



