import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CardItem.css';
import {Card, Container, Row, Col, Button} from "react-bootstrap";
import item1 from '../files/product-images/580b57fcd9996e24bc43c21d.png';

function CardItem(){
    return(
        <>

            <Card className="card-item add-curser" style={{ width: '210px' }}>
                <Card.Img className="card-image" variant="top" src={item1} />
                <Card.Body className="body-cart">
                    <Card.Title className="card-title">Carrot</Card.Title>
                    <Container className="item-con">
                        <Row>
                            <Col className="weight">1Kg</Col>
                            <Col className="price">RS 225.00</Col>
                        </Row>
                    </Container>
                    <Button className="btn-cart">Add To Cart</Button>
                </Card.Body>
            </Card>  

        </>
    );
}

export default CardItem;