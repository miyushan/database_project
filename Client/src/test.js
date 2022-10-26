import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/AboutUs.css';
import {Row, Col, Container} from "react-bootstrap";

import Shop from '../files/raul-gonzalez-escobar-ZpIskW1Tuvc-unsplash.jpg';

function AboutUs(){
    return(
        <>
            <Container className="aboutUs-container" fluid>
                <Row>
                    <Col className="aboutUs-col-1 d-flex">About Us</Col>
                </Row>
                <Row className="aboutUs-row-2">
                    <Col className="aboutUs-col-2 d-flex"><img className="shopImage" src={Shop} alt="shop"/></Col>
                    <Col className="aboutUs-col-3 d-flex">
                        <div className="aboutUs-description">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AboutUs;