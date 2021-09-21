// import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PopularItems.css';
import {Row, Col, Container} from "react-bootstrap";
import CardItem from './CardItem';
// import { ProductContext } from '../Context/ProductContext';

function PopularItems () {

    // const { popularProducts } = useContext(ProductContext);
    const popular = [
        {id: '7', Name: 'Red Onion', Price: '455.2'},
        {id: '1', Name: 'Carrot', Price: '220'},
        {id: '10', Name: 'Green Chilies', Price: '475.25'},
        {id: '5', Name: 'Potatoes', Price: '220'},
    ]

    return(
        <div className="outside">
            <Container className="outer-popular">
                <Row className="row-1">
                    <Col className="add-curser">Popular Items</Col>
                </Row>
                <Row className="row-2">
                    {popular.map((product) =>{
                        return (
                            <Col key={product.id} className="product-column">
                                <CardItem
                                    id={product.id}
                                    Name={product.Name}
                                    Weight={product.Weight}
                                    Price={product.Price}
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