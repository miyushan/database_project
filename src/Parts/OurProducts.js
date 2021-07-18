import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/OurProducts.css';
import {Row, Col, Container} from "react-bootstrap";
import CardItem from './CardItem';


function OurProducts(){
    return(
        <>
            <div className="our-product-bg">
                <Container className="outer-products">
                    <Row className="product-row-1 add-curser">
                        <Col>Our Products</Col>
                    </Row>
                    <Row className="product-row-2">
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                    </Row>
                    <Row className="product-row-2">
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                    </Row>
                    <Row className="product-row-2">
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                    </Row>
                    <Row className="product-row-2">
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                    </Row>
                    <Row className="product-row-2">
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                    </Row>
                    <Row className="product-row-2">
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                    </Row>
                    <Row className="product-row-2">
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                    </Row>
                    <Row className="product-row-2">
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                        <Col className="product-column"><CardItem /></Col>
                    </Row>
                </Container>
            </div>
            
        </>
    );
}

export default OurProducts;