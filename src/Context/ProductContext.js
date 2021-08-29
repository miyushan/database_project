import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// import item0 from '../files/product-images/1_carrot.png';
// import item1 from '../files/product-images/1_Big_Onions.png';
// import item2 from '../files/product-images/1_tomatoes.png';
// import item3 from '../files/product-images/1_pumpkin.png';
// import item4 from '../files/product-images/1_potatoes.png';
// import item5 from '../files/product-images/1_Leeks.png';
// import item6 from '../files/product-images/1_Red Onions.png';
// import item7 from '../files/product-images/1_Cabbage.png';
// import item8 from '../files/product-images/1_Brinjals.png';
// import item9 from '../files/product-images/1_Green Chilies.png';

export const ProductContext = createContext();

function ProductContextProvider (props){
    
    const [products, setProducts] = useState([]);
    const [productSelected, setProductSelected] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then (res =>{
            setProducts(res.data)
        })
    },[])

    const handleAddProduct = (id) => {
        setProductSelected(!productSelected);
        setSelectedItems(id);
    }

    const changeProductDetails = (id) => {

    }

    const addtoOrderList = (id) => {
        
    }

    return (
        <ProductContext.Provider value={{products, productSelected, selectedItems, handleAddProduct}}>
            {props.children}
        </ProductContext.Provider>
    );
    
}
 
export default ProductContextProvider;
