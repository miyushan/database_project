import React, { useState, useEffect, useContext } from 'react';
import {Form, Row, Col, Button, Container} from "react-bootstrap";
import { ReactComponent as Back } from '../../files/icons/caret-left-solid.svg';
import axios from 'axios';
import './NewBranch.css';
import { EmployeeContext } from '../../Context/EmployeeContext';

function NewBranch(){
    const { branches } = useContext(EmployeeContext);

    const [branchName, setBranchName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');


    useEffect(() => {
    }, []);

    const checkAnyChanges = () => {
        let isBranchExist = false;
        branches.forEach((branch)=>{
            if(branch.Name === branchName){
                alert('Branch Already Exists !');
                isBranchExist = true;
            }
        })
        if(!isBranchExist){
            return true;
        }else{
            return false;
        }
    }

    const addNewBranch = () => {
        //change branch data
        if (checkAnyChanges()){
            axios.post('http://localhost/database_project/create_New_Branch.php',{
                contactNumber: contactNumber,
                name: branchName,
                address: address,
            })
            .then(() => {
                alert('New Branch is Added Successfully!');
                setContactNumber('');
                setBranchName('');
                setAddress('');
            });
        }
    }

    const onChangeBranchName = (e) => {
        setBranchName(e.target.value);
    }
    
    const onChangeContactNumber = (e) => {
        setContactNumber(e.target.value);
    }

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addNewBranch();
    }

    return ( 
        <>
            <div>
                <Container className="db-container d-flex justify-content-center align-items-center">
                    
                    <Form className="db-form" onSubmit={onSubmit} method="post">
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupBranchName">
                                    <Form.Label className="db-form-label">Branch Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={branchName} onChange={onChangeBranchName}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupContactNumber">
                                    <Form.Label className="db-form-label">Contact Number</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={contactNumber} onChange={onChangeContactNumber}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupAddress">
                                    <Form.Label className="db-form-label">Address</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={address} onChange={onChangeAddress}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Button className="login-submit-btn login-input mt-2 btn-db" variant="success" type="submit">
                            Submit
                        </Button>

                        
                        
                    </Form>
                </Container>

                <div className="add-new back-to-p">
                    <Col className="text-center">
                        <Row className=""><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="/db/branch"><Back className="btn-add-new btn-p-back" height="36px"/></a></Row>
                    </Col>
                    
                </div>
            
            </div>
            
        </>
    );
}
 
export default NewBranch;