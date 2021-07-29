import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CardItem.css';
import {Card, Container, Row, Col, Button} from "react-bootstrap";
import item1 from '../files/product-images/580b57fcd9996e24bc43c21d.png';
// import { render } from '@testing-library/react';


export default class CardItem extends Component {

    constructor(props) {
        super(props);

        this.state = [
            {name: 'Carrot', weight: '1KG', price: 'RS 250.00'},
            // {name: 'Beat', weight: '1KG', price: 'RS 250.00'},
            // {name: 'Gova', weight: '1KG', price: 'RS 250.00'},
            // {name: 'Onion', weight: '1KG', price: 'RS 250.00'},
            // {name: 'Carrot', weight: '1KG', price: 'RS 250.00'},
            // {name: 'Carrot', weight: '1KG', price: 'RS 250.00'},
            // {name: 'Carrot', weight: '1KG', price: 'RS 250.00'},
            // {name: 'Carrot', weight: '1KG', price: 'RS 250.00'},
            // {name: 'Carrot', weight: '1KG', price: 'RS 250.00'}
        ];

    }
    

    render(){
        return(
            <>
                {this.state.map((veg)=>{
                    return (
                        <Card className="card-item add-curser" style={{ width: '210px' }}>
                            <Card.Img className="card-image" variant="top" src={item1} />
                            <Card.Body className="body-cart">
                                <Card.Title className="card-title">{veg.name}</Card.Title>
                                <Container className="item-con">
                                    <Row>
                                        <Col className="weight">{veg.weight}</Col>
                                        <Col className="price">{veg.price}</Col>
                                    </Row>
                                </Container>
                                <Button className="btn-cart">Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </>
            
        )
    };

}
