import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

function CartContextProvider(props) {

    const [products, setProducts] = useState([]);           //whole products
    const [cartProducts, setCartProducts] = useState([]);   //cart object
    let isExist = false;

    //use to get the total price and weight of cart items
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        axios.get('http://localhost/database_project/get_Product_details.php')
            .then(res => {
                setProducts(res.data)
            })
    }, [])


    useEffect(() => {
        let tempP = 0;
        try{
            let price = localStorage.getItem('cartDetails');
            price = JSON.parse(price);

            //check are there any items in the cart
            if (price === null) {
                setCartProducts([]);
            }
            else {
                setCartProducts(price);
            }

            price.forEach(item => {
                tempP = tempP + parseFloat(item.CartPrice);
                setTotalPrice(tempP)
            })
        }catch{
            console.log('No products in the cart')
        }
    },[])


    //increase price when increase the quantity of a cart item
    const increaseCartProducts = (Id, price, weight) => {
        let tempP = 0;
        let newArray = cartProducts.map(item => {
            if (item.id === Id) { 
                item.CartPrice = price;
                item.CartWeight = weight;
                return item;
            }else{
                return item;
            }
        })
        
        cartProducts.forEach(item => {
            tempP = tempP + (item.CartPrice);
            setTotalPrice(tempP)
        })

        //Add the session
        localStorage.setItem('cartDetails', JSON.stringify(newArray));
    }

    
    //decrease price when decrease the quantity of a cart item
    const decreaseCartProducts = (Id, price, weight) => {
        let tempP = 0;
        let newArray = cartProducts.map(item => {
            if (item.id === Id) { 
                item.CartPrice = price;
                item.CartWeight = weight;
                return item;
            }else{
                return item;
            }
        })
        
        cartProducts.forEach(item => {
            tempP = tempP + (item.CartPrice);
            setTotalPrice(tempP)
        })

        //Add the session
        localStorage.setItem('cartDetails', JSON.stringify(newArray));
    }


    //add a product to the cart
    const addItem = (Id, cost) => {

        let tempP = 0;

        const data = products.filter(product => {
            return product.id === Id
        })
        let newItems = [...cartProducts, data[0]]

        newItems = newItems.map(item => {
            if (item.id === Id) { 
                item.CartPrice = (item.Price)/2;
                item.CartWeight = 0.5;
                return item;
            }else{
                return item;
            }
        })

        newItems.forEach(item => {
            tempP = tempP + parseFloat(item.CartPrice);
            setTotalPrice(tempP)
        })

        setCartProducts(newItems);
        console.log("Added product\t" + Id);
        localStorage.setItem('cartDetails', JSON.stringify(newItems));
    }


    // check what kind of function call for the click
    const addToCart = (Id, cost) => {
        isExist = false;

        if (cartProducts.length === 0) {
            addItem(Id, cost);
        }
        else {
            cartProducts.forEach(product => {
                if (product.id === Id) {
                    isExist = true;
                }
            })
            if (isExist === false) {
                addItem(Id, cost);
            } else {
                removeFromCart(Id, cost);
            }
        }
    }


    //remove a product from the cart
    const removeFromCart = (Id, cost) => {

        cartProducts.forEach(item => {
            if(item.id===Id) {
                const temp = item.CartPrice;
                setTotalPrice(val=>val-temp);    
            }
        })
        
        const data = cartProducts.filter(product => {
            return product.id !== Id;
        })

        console.log("Removed product\t" + Id);
        setCartProducts(data)

        //Add the session
        localStorage.setItem('cartDetails', JSON.stringify(data));

    }

    return (
        <CartContext.Provider value={{ addToCart, cartProducts, removeFromCart, increaseCartProducts, decreaseCartProducts, totalPrice }}>
            {props.children}
        </CartContext.Provider>
    );

}

export default CartContextProvider;