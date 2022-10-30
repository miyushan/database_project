import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CommonStyles.css';
import { Col, Container, Row } from "react-bootstrap";
import cover from '../Media/cover-image-1.jpg';

function MainCover() {
    return (
        <>
            <Container className="b_outer-cover" fluid>
                <Row>
                    <Col className="b_cover-left d-flex justify-content-center">
                        <h1 className="b_main-header">We are here to ease your works</h1>
                    </Col>
                    <Col className="b_cover-right">
                        <img className="b_coverImage" src={cover} alt="cover" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MainCover;

