import React, { useState, useEffect, useContext } from 'react';
import './OrdersDetails.css';
import {Table, ButtonGroup, Button, Breadcrumb, Col } from "react-bootstrap";
import axios from 'axios';
// import { ReactComponent as Edit } from '../../files/icons/edit-regular.svg';
import { ReactComponent as Delete } from '../../files/icons/trash-alt-regular.svg';
// import { ReactComponent as New } from '../../files/icons/plus-solid.svg';

import { EmployeeContext } from '../../Context/EmployeeContext';
import { ReactComponent as Admin } from '../../files/icons/users-cog-solid.svg';

function OrdersDetails(){
    const { orders } = useContext(EmployeeContext);

    const [orderArr, setOrderArr] = useState([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        try{
            setOrderArr(orders);
        }catch{

        }
    }, [orders]);

    const deleteCustomer=(customer_id)=>{
        axios.get('http://localhost/database_project/delete_Orders.php?id=' + customer_id)
        .then(res =>{
            // alert('Orders Record is Deleted!!');
        })
    }
   
    return (
        <>
            <div className="db-c-bg">

                <div className="text-center"><h1 className="title">Order Records</h1></div>
                <div>
                    <Breadcrumb className="bred-c">
                        <Breadcrumb.Item href="/db/branch"><span className="bred-items">Branch Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/products"><span className="bred-items">Product Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/manager"><span className="bred-items">Manager Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/customer"><span className="bred-items">Customer Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/delivery-person"><span className="bred-items">Delivery Person Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item active><span className="bred-items">Order Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href=""><span className="bred-items">Order Item Records</span></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                    
                {/* <Container className="db-p-container"> */}

                    <Table className="table-c order-table" striped bordered>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Quantity (Kg)</th>
                                <th>Total Cost (Rs)</th>
                                <th>Customer ID</th>
                                <th>Manager ID</th>
                                <th>D Person ID</th>
                                <th>Posting Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                                {orderArr.map((product) =>{
                                    return (
                                        <tr  key={product.id}>
                                            <td className="text-r"><div>{product.id}</div></td>
                                            <td className="text-r">{product.Quantity}</td>
                                            <td className="text-r">{product.Total_Cost}</td>
                                            <td className="text-r">{product.Customer_Id}</td>
                                            <td className="text-r">{product.Manager_Id}</td>
                                            <td className="text-r">{product.Delivery_Person_Id}</td>
                                            <td className="text-center">{product.Posting_Date}</td>
                                            <td className="text-center">
                                                <ButtonGroup aria-label="Basic example">
                                                    {/* <Button href={"/db/order/edit/"+product.id} className="btn-edit"variant="warning"><Edit className="edit-p" height="15px"/></Button> */}
                                                    <Button href="/db/order" className="btn-delete" onClick={() => deleteCustomer(product.id)} variant="danger"><Delete className="delete-p" height="15px"/></Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>

                {/* </Container> */}
            
                {/* <div className="add-new ">
                    <Col className="text-center">
                        <Row><p className="mb-1" style={{color: 'white'}}>New Order</p></Row>
                        <Row className="justify-content-center align-items-center"><a className="d-flex justify-content-center align-items-center new-p"variant="success" href="branch/add"><New className="btn-add-new" height="20px"/></a></Row>
                    </Col>     
                </div> */}

                <div className="add-new-2 ">
                    <Col className="text-center">
                        <a href="/db/login" className="admin-login-btn"><Admin className="admin-login-icon" height="25px"/></a>
                    </Col>     
                </div>
            </div>
                
        </>
    );
   
    
}

export default OrdersDetails;
