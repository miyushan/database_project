import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {Form, Row, Col, Button, Container} from "react-bootstrap";
import axios from 'axios';
import './EditCustomer.css';
import { EmployeeContext } from '../../Context/EmployeeContext';
import { ReactComponent as Back } from '../../files/icons/caret-left-solid.svg';


function EditCustomer(){
    const { customers } = useContext(EmployeeContext);
    const { id } = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [branchName, setBranchName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');


    //store initial product data
    const [initialFirstName, setInitialFirstName] = useState('');
    const [initialLastName, setInitialLastName] = useState('');
    const [initialGender, setInitialGender] = useState('');
    const [initialContactNumber, setInitialContactNumber] = useState('');
    const [initialBranchName, setInitialBranchName] = useState('');
    const [initialPassword, setInitialPassword] = useState('');
    const [initialAddress, setInitialAddress] = useState('');

    const [goBack, setGoBack] = useState(false);
    const customerId = id;

    useEffect(() => {
        customers.forEach((customer)=>{
            if(customer.id === customerId){
                setInitialFirstName(customer.First_Name);
                setInitialLastName(customer.Last_Name);
                setInitialGender(customer.Gender);
                setInitialContactNumber(customer.Contact_Number);
                setInitialBranchName(customer.Branch_Name);
                setInitialPassword(customer.Password);
                setInitialAddress(customer.Address);
                setFirstName(customer.First_Name);
                setLastName(customer.Last_Name);
                setGender(customer.Gender);
                setContactNumber(customer.Contact_Number);
                setBranchName(customer.Branch_Name);
                setPassword(customer.Password);
                setAddress(customer.Address);
        }  
    })
    }, [customers, customerId]);

    const checkAnyChanges = () => {
        if((firstName.length!==0 && lastName.length!==0 && gender.length!==0 && contactNumber.length!==0 && branchName.length!==0 && password.length!==0 )){
            let iscustomerExist = false;

            if(firstName===initialFirstName && lastName===initialLastName && gender===initialGender && contactNumber===initialContactNumber && branchName===initialBranchName && password===initialPassword && address===initialAddress ){
                alert('Customer Already Exists !');
                iscustomerExist = true;
            }
            else{
                iscustomerExist = false;
            }

            if(!iscustomerExist){
                return true;
            }else{
                return false;
            }
        }else{
            alert('Please fill the required fields!');
            return false;
        }
    }
  

    const changeCustomerDetails = () => {
        //change customer data
        if (checkAnyChanges()){
            axios.post('http://localhost/database_project/update_Customer.php',{
                id: customerId,
                First_Name: firstName,
                Last_Name: lastName,
                Gender: gender,
                Contact_Number: contactNumber,
                Branch_Name: branchName,
                Password: password,
                Address: address,
            })
            .then(() => {
                alert('Customer Updated Successfully!');
                setGoBack(true);
            });
        }
    }

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

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        changeCustomerDetails();
    }
    return ( 
        <>
            <div>
                <Container className="db-container d-flex justify-content-center align-items-center">
                    
                    <Form className="db-form" onSubmit={onSubmit} method="post">

                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupFirstName">
                                    <Form.Label className="db-form-label">First Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={firstName} onChange={onChangeFirstName} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupLastName">
                                    <Form.Label className="db-form-label">Last Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={lastName} onChange={onChangeLastName}  />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupStockWeight">
                                    <Form.Label className="db-form-label">Gender</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={gender} onChange={onChangeGender}  />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupPricePerKilogram">
                                    <Form.Label className="db-form-label">Contact Number</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={contactNumber} onChange={onChangeContactNumber}  />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupBranchName">
                                    <Form.Label className="db-form-label">Branch Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={branchName} onChange={onChangeBranchName}  />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupPassword">
                                    <Form.Label className="db-form-label">Password</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="password" value={password} onChange={onChangePassword}  />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupAddress">
                                    <Form.Label className="db-form-label">Address</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={address} onChange={onChangeAddress} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button className="login-submit-btn login-input mt-2 btn-db" variant="success" type="submit">
                            Submit
                        </Button>

                        <Route>
                            {goBack ? <Redirect to="/db/customer" /> : null} 
                        </Route>
                        
                    </Form>
                </Container>
            
                <div className="add-new back-to-p">
                    <Col className="text-center">
                        <Row className=""><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="/db/customer"><Back className="btn-add-new btn-p-back" height="36px"/></a></Row>
                    </Col>
                </div>

            </div>
            
        </>
    );
}
 
export default EditCustomer;