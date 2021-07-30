import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/UpperNavBar.css';
import {Navbar, Container, Button} from "react-bootstrap";
import { ReactComponent as SignOut } from '../files/sign-out-alt-solid.svg';
import axios from 'axios';


export default class UpperNavBar extends Component{

    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            contactNumber: '',
            branchName: '',
            password: '',
            address: '',
            persons: {
                firstName: 'shakeer',
                LastName: 'miyushan'
            }
        }
    }

    componentDidMount(){
        axios.get('http://localhost/database_project/user_details.php')
        .then( res => {

            // const obj = JSON.parse(res);
                
            // // console.log("okay\t" +  + "\n");
            // // console.log("okay\t" + res['firstName'] + "\n");

            // for (var key in obj) {
            //     alert(obj[key]);
            // }
            
        })

    }


    render() {
        return(
            <Navbar className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-title-1" style={{textAlign:"left"}}>Negombo</Navbar.Brand>
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



