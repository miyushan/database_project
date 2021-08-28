import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CartTable.css';
import {Col, Row} from "react-bootstrap";
import { CartContext } from '../Context/CartContext';
import './styles/CartTableRow.css';
import { ReactComponent as Remove } from '../files/icons/remove-from-cart.svg';
import { ReactComponent as Reduce } from '../files/icons/reduce.svg';
import { ReactComponent as Increase } from '../files/icons/increase.svg';

function CartTableRow (props) {

    const { removeFromCart, increaseCartProducts, decreaseCartProducts } = useContext(CartContext);

    const [quantity, setQuantity] = useState(parseFloat(0.5));
    const [price, setPrice] = useState(Math.round((0.5*props.price) * 1e2) / 1e2);
    const [maxWeight] = useState(parseFloat(props.weight));

    const increase = () => {
        if(maxWeight>quantity && quantity>0){
            const tempP = Math.round((price + (0.1*props.price)) * 1e2) / 1e2 ;
            const tempQ = Math.round((quantity + 0.1) * 1e2) / 1e2
            setPrice(tempP);
            setQuantity(tempQ);
            increaseCartProducts(props.id, tempP, tempQ);
        }
    }
    
    const reduce = () => {
        if(maxWeight>=quantity && quantity>0.1){
            const tempP = Math.round((price - (0.1*props.price)) * 1e2) / 1e2 ;
            const tempQ = Math.round((quantity - 0.1) * 1e2) / 1e2
            setPrice(tempP);
            setQuantity(tempQ);
            increaseCartProducts(props.id, tempP, tempQ);
            decreaseCartProducts(props.id, tempP, tempQ)
        }
    }

    return(
        <>
            <td className="id-column">{props.id}</td>
            <td className="left-image"><img src={props.image} alt="product" className="img-product"/>{props.name}</td>
            <td className="add-reduce">
                <Row>
                    <Col className="cart-icons"><Increase onClick={()=>{increase()}} className="success change-weight" height="22px"/></Col>
                    <Col className="cart-icons "><Reduce onClick={()=>{reduce()}} className="success change-weight" height="22px"/></Col>
                </Row>
            </td>
            <td>{quantity} Kg</td>
            <td className="red-cart">
                <Remove className="success remove-from-cart" onClick={(e)=>{ removeFromCart(props.id, props.price); e.preventDefault();}} height="22px"/>
            </td>
            <td className="price-col">Rs {price}</td>
            
        </>
    );
    
}

export default CartTableRow;