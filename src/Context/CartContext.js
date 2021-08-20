import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

function CartContextProvider (props) {
    
    const [products, setProducts] = useState([]);           //whole products
    const [cartProducts, setCartProducts] = useState([]);   //cart object
    let isExist = false ;

    useEffect(() => {
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then (res =>{
            setProducts(res.data)
        })

        let data = localStorage.getItem('cartDetails');
        data = JSON.parse(data);
        // console.log(data);
        if(data===null){
            setCartProducts([]);
        }
        else{
            setCartProducts(data);
        }
    },[])

    //add a product to the cart
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
    
    // check what kind of function call for the click
    const addToCart = (Id) =>{

        isExist = false ;

        if (cartProducts.length===0){  
            // console.log('initial')         
            addItem(Id);
        }
        else{
            cartProducts.forEach(product=>{
                if(product.id===Id){
                    isExist = true;
                }
            })
            console.log(isExist)
            if(isExist===false){
                addItem(Id);
            }else{
                removeFromCart(Id);
            }
        }
        
    }

    //remove a product from the cart
    const removeFromCart = (Id) => {
        const data = cartProducts.filter(product =>{
            return product.id !== Id
        })
        // const newItems = [...cartProducts,  data[0]]
        console.log("removed\t"+Id)
        setCartProducts(data)
        //Add the session
        localStorage.setItem('cartDetails', JSON.stringify(data));
    }

    return (
        <CartContext.Provider value={{addToCart, cartProducts, removeFromCart}}>
            {props.children}
        </CartContext.Provider>
    );
    
}
 
export default CartContextProvider;