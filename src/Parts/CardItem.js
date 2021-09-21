import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CardItem.css';
import {Card, Container, Row, Col, Button} from "react-bootstrap";
import { CartContext } from '../Context/CartContext';
import item1 from '../files/product-images/1_carrot.png';
import item2 from '../files/product-images/1_Big_Onions.png';
import item3 from '../files/product-images/1_tomatoes.png';
import item4 from '../files/product-images/1_pumpkin.png';
import item5 from '../files/product-images/1_potatoes.png';
import item6 from '../files/product-images/1_Leeks.png';
import item7 from '../files/product-images/1_Red Onions.png';
import item8 from '../files/product-images/1_Cabbage.png';
import item9 from '../files/product-images/1_Brinjals.png';
import item10 from '../files/product-images/1_Green Chilies.png';
import itempTemp from '../files/product-images/tempProductImage.png'

export default function CardItem (props){
    const { addToCart } = useContext(CartContext);

    const productArr = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];
    let buttonStyle;

    const getItem = (id) => {
        const numOfImages = productArr.length;

        if(numOfImages>=id){
            return productArr[id-1];
        }else{
            return itempTemp;
        }
    }

    
    return(
        <>
            <Card className="card-item add-curser" style={{ width: '210px' }}>
                <Card.Img className="card-image" variant="top" src={getItem(props.id)} alt="Product Image"/>
                <Card.Body className="body-cart">
                    <Card.Title className="card-title">{props.Name}</Card.Title>
                    <Container className="item-con">
                        <Row>
                            <Col className="weight">1 Kg</Col>
                            <Col className="price">Rs. {props.Price}</Col>
                        </Row>
                    </Container>
                    <Button onClick={()=>{addToCart(props.id, parseFloat(props.Price))}} style={buttonStyle} variant="success" className="btn-cart" >Add To Cart</Button>
                    {/* <CardItemButton id={props.id} Price={props.Price}/> */}
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
