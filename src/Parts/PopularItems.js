import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PopularItems.css';
import {Row, Col, Container} from "react-bootstrap";
import CardItem from './CardItem';
import { ProductContext } from '../Context/ProductContext';

import item0 from '../files/product-images/1_carrot.png';
// import item1 from '../files/product-images/1_Big_Onions.png';
// import item2 from '../files/product-images/1_tomatoes.png';
// import item3 from '../files/product-images/1_pumpkin.png';
// import item4 from '../files/product-images/1_potatoes.png';
// import item5 from '../files/product-images/1_Leeks.png';
// import item6 from '../files/product-images/1_Red Onions.png';
// import item7 from '../files/product-images/1_Cabbage.png';
// import item8 from '../files/product-images/1_Brinjals.png';
// import item9 from '../files/product-images/1_Green Chilies.png';


function PopularItems () {

    const { popularProducts } = useContext(ProductContext);
    
    return(
        <div className="outside">
            <Container className="outer-popular">
                <Row className="row-1">
                    <Col className="add-curser">Popular Items</Col>
                </Row>
                <Row className="row-2">
                    {popularProducts.map((product) =>{
                        return (
                            <Col key={product.id} className="product-column">
                                <CardItem
                                    id={product.id}
                                    Name={product.Name}
                                    Weight={product.Weight}
                                    Price={product.Price}
                                    image={item0}
                                    // color={addToCartBtnStyle(isSelected)}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
        
    );
      

}

export default PopularItems;