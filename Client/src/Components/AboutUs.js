import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/AboutUs.css';
import { Row, Col, Container } from "react-bootstrap";

import DBoy from '../Media/deliveryBoy.png';

function AboutUs() {
    return (
        <>
            <div id="aboutUs">
                <Container className="aboutUs-container add-curser" fluid>
                    <Row>
                        <Col className="aboutUs-col-1 d-flex">About Us</Col>
                    </Row>
                    <Row className="aboutUs-row-2">
                        <Col className="aboutUs-col-2 d-flex">
                            <img className="shopImage" src={DBoy} alt="shop" />
                        </Col>
                        <Col className="aboutUs-col-3 d-flex">
                            <div className="aboutUs-description">
                                We are VegiDeals and here to fulfill your needs of Vegetables virtually. You can visit our site, choose whatever you need, and get them to your doorstep with our efficient service. We are a team that considers client satisfaction. So you can feel the best food ordering experience.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default AboutUs;