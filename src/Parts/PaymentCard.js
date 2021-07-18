import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PaymentCard.css';
import {Form, Container, Button, Row, Col} from "react-bootstrap";

function PaymentCard(){
    return(
        <>
            <Container className="form-container">
                <Form className="payment-form">
                    <Row className="mt-1 mb-4">
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label className="payment-field-title">Name On The Card</Form.Label>
                        <Form.Control className="login-input btn-square" type="text" placeholder="Shane Watson" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-4" controlId="formGridAddress">
                        <Form.Label className="payment-field-title">Address</Form.Label>
                        <Form.Control className="login-input btn-square" placeholder="12 Main Street Colombo" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formGridCardNumber">
                        <Form.Label className="payment-field-title">Card Number</Form.Label>
                        <Form.Control className="login-input btn-square" placeholder="0000-0000-0000-0000" />
                    </Form.Group>

                    <Row className="mb-4">
                        <Col xs={5}>
                            <Form.Group  controlId="formGridExpireDate">
                            <Form.Label className="payment-field-title">Expiration Date</Form.Label>
                            <Form.Control className="login-input btn-square" placeholder="00/00" />
                            </Form.Group>
                        </Col>
                        <Col xs={{ span: 4, offset: 3 }}>
                            <Form.Group controlId="formGridCVV">
                            <Form.Label className="payment-field-title">CVV</Form.Label>
                            <Form.Control className="login-input btn-square" placeholder="123"/>
                            </Form.Group>
                        </Col>
                        
                    </Row>

                    <div className=" mb-1 ">
                        <Button href="home" className="login-submit-btn login-input pay-now-btn" type="submit">PAY NOW</Button>
                    </div>

                </Form>

                

            </Container>
            
        </>
    );
}

export default PaymentCard;