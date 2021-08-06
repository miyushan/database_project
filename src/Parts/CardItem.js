// import React, { Component} from 'react';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CardItem.css';
import {Card, Container, Row, Col, Button} from "react-bootstrap";

export default function CardItem(props){

    const [clickedItems, setClickedItems] = useState(['hello', 'guys' ]);

    
    const onClick = (key) => {
        console.log(key);
        let temp = clickedItems;
        temp.push(key);
        setClickedItems(temp);
        console.log(...clickedItems);
    }


    
    return(
        <>
            <Card className="card-item add-curser" style={{ width: '210px' }}>
                <Card.Img className="card-image" variant="top" src={props.image}/>
                <Card.Body className="body-cart">
                    <Card.Title className="card-title">{props.Name}</Card.Title>
                    <Container className="item-con">
                        <Row>
                            <Col className="weight">{props.Weight} Kg</Col>
                            <Col className="price">Rs. {props.Price}</Col>
                        </Row>
                    </Container>
                    <Button onClick={()=>{onClick(props.Name)}} className="btn-cart">Add To Cart</Button>
                </Card.Body>
            </Card>
        </>   
    )

    
    

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
