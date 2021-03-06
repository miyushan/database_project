import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/UpperNavBar.css';
import {Navbar, Container, Button, Col} from "react-bootstrap";
import { ReactComponent as SignOut } from '../files/sign-out-alt-solid.svg';
// import { UserContext } from '../Context/UserContext';

function UpperNavBar(){

    // const { setIsLogedIn } = useContext(UserContext);

    const [userName, setUserName] = useState('');
    const [gender, setGender] = useState('');
    const [branchName, setBranchName] = useState('');

    useEffect(() =>{

        try{
            //get data in the session
            let data = localStorage.getItem('userDetails');
            data = JSON.parse(data);
            // console.log("Successful Login!");

            setUserName(data.firstName);
            setGender(data.gender);
            setBranchName(data.branchName);
        }
        catch(err){
            console.log('Need to loged in');
        }
        
    }, [])

    const statement = () => {
        if(gender === 'Male'){
            return 'Mr.';
        }else if(gender === 'Female'){
            return 'Mrs/Miss.';
        }
    }

    const clearUser = () => {
        // setIsLogedIn(false);

        localStorage.removeItem('userDetails');
        localStorage.removeItem('cartDetails');
        setUserName('');
        setGender('');
        setBranchName('');
    }

    return(
        <Navbar className="navbar-u" expand="md">
            <Container className="d-flex justify-content-center align-items-center">
                <Col>
                    <Navbar.Brand className="nav-title-1" style={{textAlign:"left"}}>{branchName}</Navbar.Brand>
                </Col>
                <Col className="text-center">
                    <Navbar.Brand className="nav-title-1" style={{textAlign:"center"}}>Welcome {statement()} {userName}</Navbar.Brand>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <Navbar.Brand className="nav-title-1" style={{textAlign:"right"}}>
                        <Button onClick={clearUser} href="login" className="log-out-btn" variant="success">
                            <SignOut className="sign-out-btn" height="12px"/>Log Out
                        </Button>
                    </Navbar.Brand>
                </Col>
            </Container>
        </Navbar>
    );

    
}

export default UpperNavBar;



