import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

function CartContextProvider (props) {
    
    const [products, setProducts] = useState([]);           //whole products
    // const [cartitems, setCartItems] = useState([]);         //whole cart items
    const [cartProducts, setCartProducts] = useState([]);   //cart object
    let isExist = false ;

    useEffect(() => {
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then (res =>{
            setProducts(res.data)
        })

        let data = localStorage.getItem('cartDetails');
        data = JSON.parse(data);
        console.log(data);
        if(data===null){
            setCartProducts([]);
        }
        else{
            setCartProducts(data);
        }
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

        isExist = false ;

        if (cartProducts.length===0){  
            console.log('initial')         
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

















// import axios from 'axios';
// import React, { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();

// function CartContextProvider (props) {
    
//     const [products, setProducts] = useState([]);           //whole products

//     // const [cartitems, setCartItems] = useState([]);         //whole cart items
//     const [cartProducts, setCartProducts] = useState([]);   //cart object
//     let isExist = false ;

//     useEffect(() => {
//         axios.get('http://localhost/database_project/get_Product_details.php')
//         .then (res =>{
//             setProducts(res.data)
//         })

//         let data = localStorage.getItem('cartDetails');
//         data = JSON.parse(data);
//         setCartProducts(data);
//     },[])


//     const addItem = (Id) => {
//         const data = products.filter(product =>{
//             return product.id === Id
//         })
//         const newItems = [...cartProducts,  data[0]]
//         console.log("added\t"+Id)
//         setCartProducts(newItems)

//         //Add the session
//         localStorage.setItem('cartDetails', JSON.stringify(cartProducts));
//     }
//     const addFirstItem = (Id) => {
//         const data = products.filter(product =>{
//             return product.id === Id
//         })
//         // const newItems = [...cartProducts,  data[0]]
//         // console.log("added\t"+Id)
//         setCartProducts(data[0])
//         console.log(cartProducts)

//         //Add the session
//         localStorage.setItem('cartDetails', JSON.stringify(cartProducts));
//     }


//     const addToCart = (Id) =>{
//         // console.log(cartProducts ===)
//         if (cartProducts===null){           
//             console.log('hey')
//             addFirstItem(Id);
//         }
//         else{
//             // let data = localStorage.getItem('cartDetails');
//             // data = JSON.parse(data);
//             // console.log(data);
//             // setCartItems(data);
//             cartProducts.forEach(product=>{
//                 if(product.id===Id){
//                     isExist = true;
//                 }
//             })
//             if(isExist===false){
//                 addItem(Id);
//             }
//         }
        
//     }

//     const removeFromCart = (Id) => {
//         let data = localStorage.getItem('cartDetails');
//         data = JSON.parse(data);
//         // setCartItems(data);
//         const data2 = data.filter((product)=>{
//             return product.id!==Id
//         })
//         console.log("removed\t"+Id)
//         setCartProducts(data2)

//         //Add the session
//         localStorage.setItem('cartDetails', JSON.stringify(data2));
//     }

//     return (
//         <CartContext.Provider value={{addToCart, cartProducts, removeFromCart}}>
//             {props.children}
//         </CartContext.Provider>
//     );
    
// }
 
// export default CartContextProvider;
