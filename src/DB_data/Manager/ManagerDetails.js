import React, { useState, useEffect} from 'react';
import './ManagerDetails.css';
import {Table, ButtonGroup, Button, Breadcrumb, Row, Col} from "react-bootstrap";
import axios from 'axios';
import { ReactComponent as Edit } from '../../files/icons/edit-regular.svg';
import { ReactComponent as Delete } from '../../files/icons/trash-alt-regular.svg';
import { ReactComponent as New } from '../../files/icons/plus-solid.svg';




function ManagerDetails(){

    let [customers, setCustomers] = useState([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get('http://localhost/database_project/get_Manager_details.php')
        .then (res =>{
            // console.log(res.data);
            setCustomers(res.data)
        })
    }, []);


    const deleteCustomer=(customer_id)=>{

        console.log("Customer Record is Deleted");

        axios.get('http://localhost/database_project/delete_Manager.php?id=' + customer_id)
        .then(res =>{
            console.log(res);
            // setReload(true);
        })
        
    }

    
   
    return (
        <>
            <div className="db-c-bg">

                {/* <Container className="db-c-container"> */}
                    <div className="text-center"><h1 className="title">Manager Records</h1></div>
                    <div>
                        <Breadcrumb className="bred-c">
                            <Breadcrumb.Item href=""><span className="bred-items">Branch Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href="/db/products"><span className="bred-items">Product Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item active><span className="bred-items">Manager Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href="/db/customer"><span className="bred-items">Customer Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href="/db/delivery-person"><span className="bred-items">Delivery Person Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href="/db/order"><span className="bred-items">Order Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href=""><span className="bred-items">Order Item Records</span></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <Table className="table-c" striped bordered>
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>Contact Number</th>
                                <th>Branch Name</th>
                                <th>Password</th>
                                <th>Address</th>
                                <th>Posting_Date</th>
                                <th>Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                                {customers.map((customer) =>{
                                    return (
                                        <tr key={customer.id}>
                                            <td className="t-data-c t-data-c1">{customer.id}</td>
                                            <td className="t-data-c t-data-c2">{customer.First_Name}</td>
                                            <td className="t-data-c t-data-c3">{customer.Last_Name}</td>
                                            <td className="t-data-c t-data-c4">{customer.Gender}</td>
                                            <td className="t-data-c t-data-c5">{customer.Contact_Number}</td>
                                            <td className="t-data-c t-data-c6">{customer.Branch_Name}</td>
                                            <td className="t-data-c t-data-c7">{customer.Password}</td>
                                            <td className="t-data-c t-data-c8 t-data-c-address"><div>{customer.Address}</div></td>
                                            <td className="t-data-c t-data-c9 t-data-c-time"><div>{customer.Posting_Date}</div></td>
                                            <td className="t-data-c">
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button href={"manager/edit/"+customer.id} className="btn-edit"variant="warning"><Edit className="edit-p" height="15px"/></Button>
                                                    <Button href="/db/manager" className="btn-delete" onClick={() => deleteCustomer(customer.id)} variant="danger"><Delete className="delete-p" height="15px"/></Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>

                {/* </Container> */}

                <div className="add-new ">
                    <Col className="text-center">
                        <Row><p className="mb-1" style={{color: 'white'}}>New Manager</p></Row>
                        <Row className="justify-content-center align-items-center"><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="manager/add"><New className="btn-add-new" height="20px"/></a></Row>
                    </Col>     
                </div>
            
            </div>
                
        </>
    );
   
    
}

export default ManagerDetails;
