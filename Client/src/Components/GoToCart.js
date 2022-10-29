import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/GoToCart.css';
import { Button } from "react-bootstrap";

import { CartContext } from '../Context/CartContext';
import { ReactComponent as Cart } from '../Media/shopping-cart-solid.svg';

function GoToCart() {
    const { cartProducts } = useContext(CartContext);

    return (

        <div className="cart to-cart-btn">
            <Button href="cart" className="ignore-btn" variant="success"><Cart className="cart-icon" height="35px" /></Button>
            {cartProducts.length !== 0 ? <div>
                <div className="cartProductExist"><div className="cartProductCountRel"></div></div>
                <div className="cartProductCount">{cartProducts.length}</div>
            </div> : null}
        </div>

    );
}

export default GoToCart;
