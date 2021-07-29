import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PopularItems.css';
import {Row, Col, Container} from "react-bootstrap";
import CardItem from './CardItem';


function PopularItems(){
    return(
        <>

            <Container className="outer-popular">
                <Row className="row-1">
                    <Col className="add-curser">Popular Items</Col>
                </Row>
                <Row className="row-2">
                    <Col className="column"><CardItem /></Col>
                    <Col className="column"><CardItem /></Col>
                    <Col className="column"><CardItem /></Col>
                    <Col className="column"><CardItem /></Col>
                </Row>
            </Container>




            {/* <Container className="outer-popular">
                <CardItem />
            </Container> */}

        </>
    );
}

export default PopularItems;