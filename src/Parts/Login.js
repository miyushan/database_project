import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Login.css';
import {Col, Container, Row, Button} from "react-bootstrap";
import cover from '../files/marisol-benitez-QvkAQTNj4zk-unsplash.jpg';
import LoginForm from '../Parts/LoginForm';

function Login(){
    return(
        <>
            <Container className="outer-login">
                <Row>
                
                    <Col className="login-left">
                        <img className="login-Image" src={cover} alt="cover" />
                        <div className="align">
                            <h1 className="login-header text-left">Online Vegetable Ordering System</h1>
                        </div>
                    </Col>
                    <Col className="login-right d-flex justify-content-center">
                        <div className="create-account">
                            <Button className="create-account-btn" variant="primary " type="submit">Create A New Account</Button>
                        </div>
                        <Row className="login-row-0 text-left">
                            <Col className="d-block justify-content-center login-row-4">
                                <div className="login-title login-title-1">Welcome to Avendra</div>
                                <div className="login-title login-title-2">We make you smart</div>
                            </Col>
                        </Row>
                        <Row className="login-row-0">
                            <Col className="d-flex justify-content-center login-row-5"><LoginForm /></Col>
                        </Row>
                    </Col>
                    
                </Row>
            </Container>
        </>
    );
}

export default Login;
