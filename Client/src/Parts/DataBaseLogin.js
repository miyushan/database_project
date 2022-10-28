import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Login.css';
import { Col, Container, Row, Button } from "react-bootstrap";
import './styles/DataBaseLogin.css'
import DataBaseLoginForm from '../Parts/DataBaseLoginForm';
// import { ReactComponent as Admin } from '../files/icons/users-cog-solid.svg';

function DataBaseLogin() {
    return (
        <>
            <div id="login">
                <Container className="outer-login admin-login">
                    <Row>
                        <Col className="admin-login-right d-flex justify-content-center">
                            <div className="customer-login">
                                <Button href="/login" className="create-account-btn" type="submit" variant="success">Customer Login</Button>
                            </div>
                            <div className="db-loginform">
                                <Row className="login-row-0 text-left">
                                    <Col className="d-block justify-content-center login-row-4">
                                        <div className="login-title login-title-1 add-curser">VegiDeals</div>
                                        <div className="login-title login-title-2 add-curser">Administrator Login</div>
                                    </Col>
                                </Row>
                                <Row className="login-row-0">
                                    <Col className="d-flex justify-content-center login-row-5"><DataBaseLoginForm /></Col>
                                </Row>
                            </div>
                        </Col>
                        {/* <Col className="login-left">
                            <img className="login-Image" src={cover} alt="cover" />
                            <div className="align">
                                <h1 className="login-header text-left add-curser">Online Vegetable<br />Ordering System</h1>
                            </div>
                            <div className="admin-login">
                                <a href="db/" className="admin-login-btn"><Admin className="admin-login-icon" height="20px"/></a>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default DataBaseLogin;
