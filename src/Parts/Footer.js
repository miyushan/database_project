import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Footer.css';
import {Container, Row, Col} from "react-bootstrap";

import { ReactComponent as Fb } from '../files/facebook-f-brands.svg';
import { ReactComponent as Whtsp } from '../files/whatsapp-brands.svg';

function Footer(){
    return(
        <>

            <Container className="footer-outer align-content-center" fluid>
                <Row className="down-row">
                    <Col className="text-left down-col d-flex align-items-start">
                        <div><a className="brand-name" href="#home">VegiDeals</a></div>
                    </Col>
                    <Col className="down-col d-flex align-items-center justify-content-end">
                        <div>
                            <div className="quick-links mb-2">QUICK LINKS</div>
                            <div><a className="quick-link-item" href="products">PRODUCTS</a></div>
                            <div><a className="quick-link-item" href="about-us">ABOUT US</a></div>
                            <div><a className="quick-link-item" href="contact-us">CONTACT US</a></div>
                            <div><a className="quick-link-item" href="branches">BRANCHES</a></div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="down-row row-2">
                    <Col className="down-col down-col-1 copyright">Copyright @ 2021 All Rights Reserved by<br />Miyushan</Col>
                    <Col className="down-col down-col-2 copyright d-flex justify-content-end">
                        <button><Whtsp href="cart" className="sign-out-btn" height="18px"/></button>
                        <button className="fb-main-btn-last"><Fb href="cart" className="sign-out-btn fb-btn-last" height="18px"/></button>
                    </Col>
                </Row>
            </Container>  

        </>
    );
}

export default Footer;