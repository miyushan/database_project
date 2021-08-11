import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/UpperNavBar.css';
import {Navbar, Container, Button} from "react-bootstrap";
import { ReactComponent as SignOut } from '../files/sign-out-alt-solid.svg';


function UpperNavBar(){

    const [userName, setUserName] = useState('');
    const [gender, setGender] = useState('');
    const [branchName, setBranchName] = useState('');

    useEffect(() =>{

        //get data in the session
        let data = localStorage.getItem('userDetails');
        data = JSON.parse(data);
        // console.log(data);

        setUserName(data.firstName);
        setGender(data.gender);
        setBranchName(data.branchName);

    }, [])

    const statement = () => {
        if(gender === 'Male'){
            return 'Mr.';
        }else if(gender === 'Female'){
            return 'Mrs/Miss.';
        }
    }

    const clearUser = () => {
        localStorage.removeItem('userDetails');
        setUserName('');
        setGender('');
        setBranchName('');
    }

    return(
        <Navbar className="navbar-u" expand="lg">
            <Container>
                <Navbar.Brand className="nav-title-1" style={{textAlign:"left"}}>{branchName}</Navbar.Brand>
                <Navbar.Brand className="nav-title-1" style={{textAlign:"center"}}>Welcome {statement()} {userName}</Navbar.Brand>
                <Navbar.Brand className="nav-title-1" style={{textAlign:"right"}}>
                    <Button onClick={clearUser} href="login" className="log-out-btn" variant="success">
                        <SignOut className="sign-out-btn" height="12px"/>Log Out
                    </Button>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );

    
}

export default UpperNavBar;



