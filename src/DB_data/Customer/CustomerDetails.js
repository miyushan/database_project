import React, { useState, useEffect} from 'react';
import './CustomerDetails.css';
import {Table, ButtonGroup, Button, Breadcrumb} from "react-bootstrap";
import axios from 'axios';
import { ReactComponent as Edit } from '../../files/icons/edit-regular.svg';
import { ReactComponent as Delete } from '../../files/icons/trash-alt-regular.svg';




function CustomerDetails(){

    let [customers, setCustomers] = useState([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get('http://localhost/database_project/get_Customer_details.php')
        .then (res =>{
            setCustomers(res.data);
        })
        .then(err =>{
            console.log("No customers to display");
        })
    }, []);


    const deleteCustomer=(customer_id)=>{

        console.log("Customer Record is Deleted");

        axios.get('http://localhost/database_project/delete_Customer.php?id=' + customer_id)
        .then(res =>{
            console.log(res);
            // setReload(true);
        })
        
    }

   
    return (
        <>
            
            <div className="db-c-bg">

                {/* <Container className="db-c-container"> */}
                    <div className="text-center"><h1 className="title">Customer Records</h1></div>
                    <div>
                        <Breadcrumb className="bred-c">
                            <Breadcrumb.Item href="/db/branch"><span className="bred-items">Branch Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href="/db/products"><span className="bred-items">Product Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href="/db/manager"><span className="bred-items">Manager Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item active><span className="bred-items">Customer Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href="/db/delivery-person"><span className="bred-items">Delivery Person Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href="/db/order"><span className="bred-items">Order Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href=""><span className="bred-items">Order Item Records</span></Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <Table className="table-c" striped bordered>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>C. Number</th>
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
                                            <td className="r-margin">{customer.id}</td>
                                            <td className="r-margin">{customer.First_Name}</td>
                                            <td className="r-margin">{customer.Last_Name}</td>
                                            <td className="r-margin">{customer.Gender}</td>
                                            <td className="r-margin text-center">{customer.Contact_Number}</td>
                                            <td className="r-margin">{customer.Branch_Name}</td>
                                            <td className="r-margin">{customer.Password}</td>
                                            <td className="r-margin"><div>{customer.Address}</div></td>
                                            <td className="r-margin text-center"><div>{customer.Posting_Date}</div></td>
                                            <td className="r-margin text-center">
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button href="/db/customer/edit" className="btn-edit"variant="warning"><Edit className="edit-p" height="15px"/></Button>
                                                    <Button href="/db/customer" className="btn-delete" onClick={() => deleteCustomer(customer.id)} variant="danger"><Delete className="delete-p" height="15px"/></Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>

                {/* </Container> */}
            
            </div>
                
            
            
        </>
    );
   
    
}

export default CustomerDetails;
