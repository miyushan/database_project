import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

function CartContextProvider (props) {
    
    const [products, setProducts] = useState([]);           //whole products
    const [cartProducts, setCartProducts] = useState([]);   //cart object
    const [totPrice, setTotPrice] = useState(0);            //cart object
    // const [isSelected, setIsSelected] = useState();   //is seleced product
    let isExist = false ;

    

    useEffect(() => {
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then (res =>{
            setProducts(res.data)
        })

        let price = localStorage.getItem('priceDetails');
        price = JSON.parse(price);
        setTotPrice(price);

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
    const addItem = (Id, cost) => {

        const data = products.filter(product =>{
            return product.id === Id
        })
        const newItems = [...cartProducts,  data[0]]

        setCartProducts(newItems);

        let tempTotalPrice =  totPrice + cost;
        setTotPrice(tempTotalPrice);

        //Add the session
        localStorage.setItem('cartDetails', JSON.stringify(newItems));
        localStorage.setItem('priceDetails', JSON.stringify(tempTotalPrice));
    }
    
    // check what kind of function call for the click
    const addToCart = (Id, cost) =>{
        isExist = false ;

        if (cartProducts.length===0){  
            console.log(cost)         
            addItem(Id, cost);
        }
        else{
            cartProducts.forEach(product=>{
                if(product.id===Id){
                    isExist = true;
                }
            })
            if(isExist===false){
                addItem(Id, cost);
            }else{
                removeFromCart(Id, cost);
            }
        }
    }

    //remove a product from the cart
    const removeFromCart = (Id, cost) => {
        const data = cartProducts.filter(product =>{
            return product.id !== Id
        })
        // const newItems = [...cartProducts,  data[0]]
        console.log("removed\t"+Id)
        setCartProducts(data)
        //Add the session
        localStorage.setItem('cartDetails', JSON.stringify(data));

        let tempTotalPrice =  totPrice - cost;
        setTotPrice(tempTotalPrice);
        //Add the session
        localStorage.setItem('priceDetails', JSON.stringify(tempTotalPrice));
    }

    return (
        <CartContext.Provider value={{addToCart, cartProducts, removeFromCart, totPrice}}>
            {props.children}
        </CartContext.Provider>
    );
    
}
 
export default CartContextProvider;