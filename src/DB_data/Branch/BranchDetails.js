import React, { useState, useEffect, useContext } from 'react';
import './BranchDetails.css';
import {Table, Container, ButtonGroup, Button, Breadcrumb, Col, Row } from "react-bootstrap";
import axios from 'axios';
import { ReactComponent as Edit } from '../../files/icons/edit-regular.svg';
import { ReactComponent as Delete } from '../../files/icons/trash-alt-regular.svg';
import { ReactComponent as New } from '../../files/icons/plus-solid.svg';

import { EmployeeContext } from '../../Context/EmployeeContext';
import { ReactComponent as Admin } from '../../files/icons/users-cog-solid.svg';

function BranchDetails(){
    const { branches } = useContext(EmployeeContext);

    const [products, setProducts] = useState([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        try{
            setProducts(branches);
        }catch{

        }
    }, [branches]);

    const deleteCustomer=(customer_id)=>{
        axios.get('http://localhost/database_project/delete_Branch.php?id=' + customer_id)
        .then(res =>{
            alert('Branch is Deleted!!');
        })
    }
   
    return (
        <>
            <div className="db-bg">

                <div className="text-center"><h1 className="title">Branch Records</h1></div>
                <div>
                    <Breadcrumb className="bred">
                        <Breadcrumb.Item active><span className="bred-items">Branch Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/products"><span className="bred-items">Product Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/manager"><span className="bred-items">Manager Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/customer"><span className="bred-items">Customer Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/delivery-person"><span className="bred-items">Delivery Person Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/order"><span className="bred-items">Order Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href=""><span className="bred-items">Order Item Records</span></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                    
                <Container className="db-p-container">

                    <Table className="table-p" striped bordered>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Branch Name</th>
                                <th>Address</th>
                                <th>Posting Date</th>
                                <th>Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                                {products.map((product) =>{
                                    return (
                                        <tr  key={product.id}>
                                            <td className="b-data-1 text-r"><div>{product.id}</div></td>
                                            <td className="b-data-2">{product.Name}</td>
                                            <td className="b-data-3">{product.Address}</td>
                                            <td className="b-data-4 text-center">{product.Posting_Date}</td>
                                            <td className="b-data-5 text-center">
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button href={"/db/branch/edit/"+product.id} className="btn-edit"variant="warning"><Edit className="edit-p" height="15px"/></Button>
                                                    <Button href="/db/branch" className="btn-delete" onClick={() => deleteCustomer(product.id)} variant="danger"><Delete className="delete-p" height="15px"/></Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>

                </Container>
            
                <div className="add-new ">
                    <Col className="text-center">
                        <Row><p className="mb-1" style={{color: 'white'}}>New Branch</p></Row>
                        <Row className="justify-content-center align-items-center"><a className="d-flex justify-content-center align-items-center new-p"variant="success" href="branch/add"><New className="btn-add-new" height="20px"/></a></Row>
                    </Col>     
                </div>

                <div className="add-new-2 ">
                    <Col className="text-center">
                        <a href="/db/login" className="admin-login-btn"><Admin className="admin-login-icon" height="25px"/></a>
                    </Col>     
                </div>
            </div>
                
        </>
    );
   
    
}

export default BranchDetails;
