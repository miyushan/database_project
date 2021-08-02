import {Form, Row, Col, Button, Container} from "react-bootstrap";
import './EditProducts.css';


function EditProduct(){
    return ( 
        <>
            <div>
                <Container className="db-container d-flex justify-content-center align-items-center">
                    
                    <Form className="db-form">
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupProductName">
                                    <Form.Label className="db-form-label">Product Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Carrot" />
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Row>
                            
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupStockWeight">
                                    <Form.Label className="db-form-label">Total Stock Weight</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="2Kg" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupPricePerKilogram">
                                    <Form.Label className="db-form-label">Price Per Kilogram</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Rs. 265.00" />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Button className="login-submit-btn login-input mt-2 btn-db" variant="success" type="submit">
                            Submit
                        </Button>
                        
                    </Form>
                </Container>
            
            </div>
            
        </>
    );
}
 
export default EditProduct;