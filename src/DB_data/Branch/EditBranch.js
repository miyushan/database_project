import {Form, Row, Col, Button, Container} from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import './EditBranch.css';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Back } from '../../files/icons/caret-left-solid.svg';
import axios from 'axios';
import { EmployeeContext } from '../../Context/EmployeeContext';

function EditBranch(){
    const { branches } = useContext(EmployeeContext);
    const { id } = useParams();

    // const [branchArr, setBranchArr] = useState([]);
    const [branchName, setBranchName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');

    //store initial product data
    const [initialBranchName, setInitialBranchName] = useState('');
    const [initialContactNumber, setInitialContactNumber] = useState('');
    const [initialAddress, setInitialAddress] = useState('');

    const [goBack, setGoBack] = useState(false);
    const branchId = id;

    useEffect(() => {
        branches.forEach((branch)=>{
            if(branch.id === branchId){
                setInitialContactNumber(branch.Contact_Number);
                setInitialBranchName(branch.Name);
                setInitialAddress(branch.Address);
                setContactNumber(branch.Contact_Number);
                setBranchName(branch.Name);
                setAddress(branch.Address);
            }  
        })
    }, [branches, branchId]);


    const checkAnyChanges = () => {
        if(( contactNumber.length!==0 && branchName.length!==0 && address.length!==0)){
            let isBranchExist = false;

            if(contactNumber===initialContactNumber && branchName===initialBranchName && address===initialAddress){
                alert('Branch Already Exists !');
                isBranchExist = true;
            }
            else{
                isBranchExist = false;
            }

            if(!isBranchExist){
                return true;
            }else{
                return false;
            }
        }else{
            alert('Please fill the fields!');
            return false;
        }
    }

    const changeBranchDetails = () => {
        //change branch data
        if (checkAnyChanges()){
            axios.post('http://localhost/database_project/update_Branch.php',{
                id: branchId,
                Contact_Number: contactNumber,
                Name: branchName,
                Address: address,
            })
            .then(() => {
                alert('Branch is Updated Successfully!');
                setGoBack(true);
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
        changeBranchDetails();
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

                        <Route>
                            {goBack ? <Redirect to="/db/branch" /> : null} 
                        </Route>
                        
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
 
export default EditBranch;