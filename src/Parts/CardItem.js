import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CardItem.css';
import {Card, Container, Row, Col, Button} from "react-bootstrap";
import item1 from '../files/product-images/burhan-rexhepi-gAIhUvHv0f0-unsplash (1).jpg';

function CardItem(){
    return(
        <>

            <Card className="card-item add-curser" style={{ width: '210px' }}>
                <Card.Img variant="top" src={item1} />
                <Card.Body>
                    <Card.Title className="card-title">Carrot</Card.Title>
                    <Container className="item-con">
                        <Row>
                            <Col className="weight">1Kg</Col>
                            <Col className="price">RS 225.00</Col>
                        </Row>
                    </Container>
                    <Button className="btn-cart">Add to cart</Button>
                </Card.Body>
            </Card>  

        </>
    );
}

export default CardItem;