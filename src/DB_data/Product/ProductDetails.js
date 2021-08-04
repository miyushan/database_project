import React, { useState, useEffect} from 'react';
import './ProductDetails.css';
import {Table, Container, ButtonGroup, Button, Breadcrumb, Col, Row } from "react-bootstrap";
import axios from 'axios';
import { ReactComponent as Edit } from '../../files/icons/edit-regular.svg';
import { ReactComponent as Delete } from '../../files/icons/trash-alt-regular.svg';
import { ReactComponent as New } from '../../files/icons/plus-solid.svg';




function ProductDetails(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then (res =>{
            console.log(res.data);
            setProducts(res.data)
        })
    }, []);

    console.log("All products:");
    console.log(products);

    
   
    return (
        <>
            <div className="db-bg">

                <div className="text-center"><h1 className="title">Product Records</h1></div>
                <div>
                    <Breadcrumb className="bred">
                        <Breadcrumb.Item active><span className="bred-items">Product Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href=""><span className="bred-items">Manager Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item  href="/db/customer"><span className="bred-items">Customer Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href=""><span className="bred-items">Delivery Person Records</span></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                    
                <Container className="db-p-container">

                    <Table className="table-p" striped bordered>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Stock Weight</th>
                                <th>Price Per Kilogram</th>
                                <th>Posting Date</th>
                                <th>Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                                {products.map((product) =>{
                                    return (
                                        <tr  key={product.id}>
                                            <td className="t-data-1"><div>{product.id}</div></td>
                                            <td className="t-data-2">{product.Name}</td>
                                            <td className="t-data-3">{product.Weight}</td>
                                            <td className="t-data-4">{product.Price}</td>
                                            <td className="t-data-5">{product.Posting_Date}</td>
                                            <td className="t-data-6">
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button href="/db/products/edit" className="btn-edit"variant="success"><Edit className="" height="15px"/></Button>
                                                    <Button className="btn-delete" variant="success"><Delete className="" height="15px"/></Button>
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
                        <Row><p className="mb-1" style={{color: 'white'}}>New Product</p></Row>
                        <Row className="justify-content-center align-items-center"><a className="d-flex justify-content-center align-items-center new-p"variant="success" href="products/add"><New className="btn-add-new" height="20px"/></a></Row>
                    </Col>
                    
                </div>
            </div>
                
        </>
    );
   
    
}

export default ProductDetails;
