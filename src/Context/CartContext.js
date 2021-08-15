import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

function CartContextProvider (props) {
    
    const [cartProducts, setCartProducts] = useState([]);
    const [index, setIndex] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then (res =>{
            // setCartProducts(res.data)
        })
    },[])

    return (
        <CartContext.Provider value={[index, setIndex, cartProducts, setCartProducts]}>
            {props.children}
        </CartContext.Provider>
    );
    
}
 
export default CartContextProvider;
