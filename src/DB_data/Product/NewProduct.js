import React, { useState, useEffect } from 'react';
import {Form, Row, Col, Button, Container} from "react-bootstrap";
import { ReactComponent as Back } from '../../files/icons/caret-left-solid.svg';
import axios from 'axios';
import './NewProduct.css';


function NewProduct(){

    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [totalStockWeight, setTotalStockWeight] = useState('');
    const [pricePerKilogram, setPricePerKilogram] = useState('');
    let [isOldProduct, setIsOldProduct] = useState(false);
    let [isProductAdded, setIsProductAdded] = useState(false);


    useEffect(() => {
        console.log('useEffect')
        axios.get('http://localhost/database_project/get_Product_Details.php')
        .then(res => res.data)
        .then((res) => {
            setProducts(res);
            setIsOldProduct(false);
        })
    },[isProductAdded]);

    const checkNewProduct = () => {
        products.forEach(product => {

            if(productName === product.Name){
                isOldProduct = true;
                console.log("isOldProduct\t" + isOldProduct); 
                console.log("old product");  
            }

        })

        if(isOldProduct===false){
            axios.post('http://localhost/database_project/create_New_Product.php',{
                productName: productName,
                totalStockWeight: totalStockWeight,
                pricePerKilogram: pricePerKilogram,
            })
            .then(() => {
                console.log("New Product created");
                setProductName('');
                setPricePerKilogram('');
                setTotalStockWeight('');
                setIsProductAdded(true);
            });
        }
    }

    const onChangeProductName = (e) => {
        setProductName(e.target.value);
    }
    
    const onChangeTotalStockWeight = (e) => {
        setTotalStockWeight(e.target.value);
    }

    const onChangePricePerKilogram = (e) => {
        setPricePerKilogram(e.target.value);
    }

    const onSubmit = (e) => {
        console.log(products)
        e.preventDefault();
        checkNewProduct();
    }

    return ( 
        <>
            <div>
                <Container className="db-container d-flex justify-content-center align-items-center">
                    
                    <Form className="db-form" onSubmit={onSubmit} method="post" encType="multipart/form-data">
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupProductName">
                                    <Form.Label className="db-form-label">Product Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="New Product" value={productName} onChange={onChangeProductName}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4"  controlId="formFile">
                                    <Form.Label className="db-form-label">Product Image</Form.Label>
                                    <Form.Control className="insert-image" type="file" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupStockWeight">
                                    <Form.Label className="db-form-label">Total Stock Weight</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Weight" value={totalStockWeight} onChange={onChangeTotalStockWeight}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupPricePerKilogram">
                                    <Form.Label className="db-form-label">Price Per Kilogram</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Price Per Kg" value={pricePerKilogram} onChange={onChangePricePerKilogram} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Button className="login-submit-btn mt-2 login-input btn-db" variant="success" type="submit">
                            Submit
                        </Button>

                        
                        
                    </Form>
                </Container>

                <div className="add-new back-to-p">
                    <Col className="text-center">
                        <Row className=""><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="/db/products"><Back className="btn-add-new btn-p-back" height="36px"/></a></Row>
                    </Col>
                    
                </div>
            
            </div>
            
        </>
    );
}
 
export default NewProduct;