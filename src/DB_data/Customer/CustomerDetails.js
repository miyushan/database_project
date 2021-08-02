import React, { useState, useEffect} from 'react';
import './CustomerDetails.css';
import {Table, ButtonGroup, Button, Breadcrumb} from "react-bootstrap";
import axios from 'axios';
import { ReactComponent as Edit } from '../../files/icons/edit-regular.svg';
import { ReactComponent as Delete } from '../../files/icons/trash-alt-regular.svg';




function CustomerDetails(){

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/database_project/get_Customer_details.php')
        .then (res =>{
            console.log(res.data);
            setCustomers(res.data)
        })
    }, []);

    console.log("All customers:");
    console.log(customers);

    
   
    return (
        <>
            <div className="db-c-bg">

                {/* <Container className="db-c-container"> */}
                    <div className="text-center"><h1 className="title">Customer Records</h1></div>
                    <div>
                        <Breadcrumb className="bred-c">
                            <Breadcrumb.Item href="/db/products"><span className="bred-items">Product Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href=""><span className="bred-items">Manager Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item active><span className="bred-items">Customer Records</span></Breadcrumb.Item>
                            <Breadcrumb.Item href=""><span className="bred-items">Delivery Person Records</span></Breadcrumb.Item>
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
                                                    <Button href="/db/customer/edit" className="btn-edit"variant="success"><Edit className="" height="15px"/></Button>
                                                    <Button className="btn-delete" variant="success"><Delete className="" height="15px"/></Button>
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
