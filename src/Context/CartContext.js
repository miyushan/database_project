import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

function CartContextProvider (props) {
    
    const [products, setProducts] = useState([]);           //whole products
    const [cartitems, setCartItems] = useState([]);         //whole cart items
    const [cartProducts, setCartProducts] = useState([]);   //cart object
    let isExist = false ;

    useEffect(() => {
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then (res =>{
            setProducts(res.data)
        })
    },[])


    const addItem = (Id) => {
        const data = products.filter(product =>{
            return product.id === Id
        })
        const newItems = [...cartProducts,  data[0]]
        console.log("added\t"+Id)
        setCartProducts(newItems)

        //Add the session
        localStorage.setItem('cartDetails', JSON.stringify(newItems));
    }

    const addToCart = (Id) =>{

        if (cartProducts.length===0){           
            addItem(Id);
        }
        else{
            let data = localStorage.getItem('cartDetails');
            data = JSON.parse(data);
            console.log(data);
            setCartItems(data);
            cartitems.forEach(product=>{
                if(product.id===Id){
                    isExist = true;
                }
            })
            if(isExist===false){
                addItem(Id);
            }
        }
        
    }

    return (
        <CartContext.Provider value={{addToCart, cartProducts}}>
            {props.children}
        </CartContext.Provider>
    );
    
}
 
export default CartContextProvider;
