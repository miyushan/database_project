import React, { useState, useEffect } from 'react';
import {Form, Row, Col, Button, Container} from "react-bootstrap";
import { ReactComponent as Back } from '../../files/icons/caret-left-solid.svg';
import axios from 'axios';
import './NewBranch.css';


function NewBranch(){

    const [deliveryPerson, setDeliveryPerson] = useState([]);
    const [branchName, setBranchName] = useState('');
    const [address, setAddress] = useState('');
    let [isOldDPerson, setIsOldDPerson] = useState(false);
    let [isDPersonAdded, setIsDPersonAdded] = useState(false);


    useEffect(() => {
        console.log('useEffect')
        axios.get('http://localhost/database_project/get_Branch_Details.php')
        .then(res => res.data)
        .then((res) => {
            setDeliveryPerson(res);
            setIsOldDPerson(false);
        })
    },[isDPersonAdded]);

    const checkNewProduct = () => {
        deliveryPerson.forEach(dPerson => {

            if(branchName === dPerson.Name){
                isOldDPerson = true;
                console.log("isOldDeliveryPerson\t" + isOldDPerson); 
                console.log("Old DeliveryPerson");  
            }

        })

        if(isOldDPerson===false){
            axios.post('http://localhost/database_project/create_New_Branch.php',{
                name: branchName,
                address: address
            })

            .then(() => {
                console.log("New Product created");
                setBranchName('');
                setAddress('')
                setIsDPersonAdded(true)
            });
        }
    }

    const onChangeBranchName = (e) => {
        setBranchName(e.target.value);
    }
    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }


    const onSubmit = (e) => {
        console.log(deliveryPerson)
        e.preventDefault();
        checkNewProduct();
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
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Branch Name" value={branchName} onChange={onChangeBranchName}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupAddress">
                                    <Form.Label className="db-form-label">Address</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Address" value={address} onChange={onChangeAddress}/>
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