import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CardItem.css';
import {Card, Container, Row, Col, Button} from "react-bootstrap";

export default class CardItem extends Component {


    render(){

        console.log(this.props.weight);

        return(
            <>
                <Card className="card-item add-curser" style={{ width: '210px' }}>
                    <Card.Img className="card-image" variant="top" src={this.props.image} />
                    <Card.Body className="body-cart">
                        <Card.Title className="card-title">{this.props.name}</Card.Title>
                        <Container className="item-con">
                            <Row>
                                <Col className="weight">1 Kg</Col>
                                <Col className="price">Rs. {this.props.price}</Col>
                            </Row>
                        </Container>
                        <Button className="btn-cart">Add To Cart</Button>
                    </Card.Body>
                </Card>
                
            </>
            
        )
    };

}
