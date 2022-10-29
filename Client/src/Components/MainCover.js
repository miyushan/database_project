import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/MainCover.css';
import { Col, Container, Row } from "react-bootstrap";
import cover from '../Media/cover-image-1.jpg';

function MainCover() {
    return (
        <>
            <Container className="outer-cover">
                <Row>
                    <Col className="cover-left d-flex justify-content-center">
                        <h1 className="main-header text-left">We are here to ease your works</h1>
                    </Col>
                    <Col className="cover-right">
                        <img className="coverImage" src={cover} alt="cover" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MainCover;

