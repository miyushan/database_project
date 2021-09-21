import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

import item1 from '../files/product-images/1_carrot.png';
import item2 from '../files/product-images/1_Big_Onions.png';
import item3 from '../files/product-images/1_tomatoes.png';
import item4 from '../files/product-images/1_pumpkin.png';
import item5 from '../files/product-images/1_potatoes.png';
import item6 from '../files/product-images/1_Leeks.png';
import item7 from '../files/product-images/1_Red Onions.png';
import item8 from '../files/product-images/1_Cabbage.png';
import item9 from '../files/product-images/1_Brinjals.png';
import item10 from '../files/product-images/1_Green Chilies.png';
import itempTemp from '../files/product-images/tempProductImage.png'

export const ProductContext = createContext();

function ProductContextProvider (props){
    
    const [products, setProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [productSelected, setProductSelected] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const productArr = [itempTemp, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];
    

    useEffect(() =>{
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then (res =>{
            setProducts(res.data);
            setPopularProducts(res.data);
        })

        // const tempPopularPro = [];
        // tempPopularPro[0] = products[3];
        // tempPopularPro[1] = products[5];
        // tempPopularPro[2] = products[8];
        // tempPopularPro[3] = products[7];

        // setPopularProducts(tempPopularPro);
    },[])

    const handleAddProduct = (id) => {
        setProductSelected(!productSelected);
        setSelectedItems(id);
    }

    return (
        <ProductContext.Provider value={{products, popularProducts, productSelected, selectedItems, handleAddProduct, productArr}}>
            {props.children}
        </ProductContext.Provider>
    );
    
}
 
export default ProductContextProvider;
