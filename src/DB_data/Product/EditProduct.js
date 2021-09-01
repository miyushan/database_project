import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {Form, Row, Col, Button, Container} from "react-bootstrap";
import { ReactComponent as Back } from '../../files/icons/caret-left-solid.svg';
import axios from 'axios';
import { ProductContext } from '../../Context/ProductContext';


function EditProduct(props){
    const { products } = useContext(ProductContext);
    const { id } = useParams();

    const [productName, setProductName] = useState('');
    const [totalStockWeight, setTotalStockWeight] = useState('');
    const [pricePerKilogram, setPricePerKilogram] = useState('');

    //store initial product data
    const [initialProductName, setInitialProductName] = useState('');
    const [initialTotalStockWeight, setInitialTotalStockWeight] = useState('');
    const [initialPricePerKilogram, setInitialPricePerKilogram] = useState('');

    const productId = id;

    useEffect(() => {
        products.forEach((product)=>{
            if(product.id === productId){
                setInitialProductName(product.Name);
                setInitialTotalStockWeight(product.Weight);
                setInitialPricePerKilogram(product.Price);
                setProductName(product.Name);
                setTotalStockWeight(product.Weight);
                setPricePerKilogram(product.Price);
            }  
        })
    }, [products, productId]);

    //check properties of the considering product are changed or not
    const checkAnyChanges = () => {
        if((productName!==initialProductName || totalStockWeight!==initialTotalStockWeight || pricePerKilogram!==initialPricePerKilogram) && (productName.length!==0 && totalStockWeight.length!==0 && pricePerKilogram.length!==0)){
            return true;
        }else{
            return false;
        }
    }

    const changeProductDetails = () => {
        //change product data
        if (checkAnyChanges()){
            console.log('hello');
            axios.post('http://localhost/database_project/update_Product.php',{
                id: productId,
                productName: productName,
                totalStockWeight: totalStockWeight,
                pricePerKilogram: pricePerKilogram,
            })
            .then(() => {
                alert('Product Edited Successfully!');
            });
        }else{
            alert('Please Do Valid Changes!');
            setProductName(initialProductName);
            setTotalStockWeight(initialTotalStockWeight);
            setPricePerKilogram(initialPricePerKilogram);
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
        e.preventDefault();
        changeProductDetails();
    }

    return ( 
        <>
            <div>
                <Container className="db-container d-flex justify-content-center align-items-center">
                    
                    <Form className="db-form" onSubmit={onSubmit} method="post">
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupProductName">
                                    <Form.Label className="db-form-label">Product Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={productName} onChange={onChangeProductName}/>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Row>
                            
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupStockWeight">
                                    <Form.Label className="db-form-label">Total Stock Weight</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={totalStockWeight} onChange={onChangeTotalStockWeight}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupPricePerKilogram">
                                    <Form.Label className="db-form-label">Price Per Kilogram</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={pricePerKilogram} onChange={onChangePricePerKilogram} />
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
                        <Row className=""><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="/db/products"><Back className="btn-add-new btn-p-back" height="36px"/></a></Row>
                    </Col>
                    
                </div>
            
            </div>
            
        </>
    );
}
 
export default EditProduct;