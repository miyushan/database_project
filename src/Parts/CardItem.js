import React, { Component} from 'react';
// import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CardItem.css';
import {Card, Container, Row, Col, Button} from "react-bootstrap";
import { ProductContext } from '../Context/ProductContext';

export default class CardItem extends Component{
    static contextType = ProductContext;

    render(){
        const { handleAddProduct } = this.context;
        return(
            <>
                <Card className="card-item add-curser" style={{ width: '210px' }}>
                    <Card.Img className="card-image" variant="top" src={this.props.image} alt="Product Image"/>
                    <Card.Body className="body-cart">
                        <Card.Title className="card-title">{this.props.Name}</Card.Title>
                        <Container className="item-con">
                            <Row>
                                <Col className="weight">1 Kg</Col>
                                <Col className="price">Rs. {this.props.Price}</Col>
                            </Row>
                        </Container>
                        <Button onClick={()=>handleAddProduct(this.props.id)} className="btn-cart">Add To Cart</Button>
                    </Card.Body>
                </Card>
            </>   
        )
    }
    

}



















// export default class CardItem extends Component {

//     constructor(props) {
//         super(props);
//         this.onClick = this.onClick.bind(this);

//         this.state = {
//             clickedItems: []
//         }
//     }

    
//     onClick(key) {
//         console.log(key);
//         this.temp = this.clickedItems.concat(key);
//         this.setState=({
//             clickedItems : this.temp
//         })
//         // // this.clickedItems.push(key);
//         // console.log(this.clickedItems);

//     }


//     render(props){
//         return(
//             <>
//                 <Card className="card-item add-curser" style={{ width: '210px' }}>
//                     <Card.Img className="card-image" variant="top" src={this.props.image}/>
//                     <Card.Body className="body-cart">
//                         <Card.Title className="card-title">{this.props.Name}</Card.Title>
//                         <Container className="item-con">
//                             <Row>
//                                 <Col className="weight">{this.props.Weight} Kg</Col>
//                                 <Col className="price">Rs. {this.props.Price}</Col>
//                             </Row>
//                         </Container>
//                         <Button onClick={()=>{this.onClick(this.props.Name)}} className="btn-cart">Add To Cart</Button>
//                     </Card.Body>
//                 </Card>
//             </>   
//         )
//     }
    
    

// }
