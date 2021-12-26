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
import item11 from '../files/product-images/garlic.png';
import item12 from '../files/product-images/Manioc.png';
import item13 from '../files/product-images/Luffa .png';
import item14 from '../files/product-images/Sweet Potato.png';
import item15 from '../files/product-images/Ladies Fingers.png';
import item16 from '../files/product-images/Capsicum.png';
import item17 from '../files/product-images/Beet.png';
import item18 from '../files/product-images/Bitter Gourd.png';
import item19 from '../files/product-images/Lime.png';
import item20 from '../files/product-images/Melon_Kekiri.png';
import item21 from '../files/product-images/Broccoli.png';
import item22 from '../files/product-images/Green Cucumber.png';
import item23 from '../files/product-images/brinjal.png';
import item24 from '../files/product-images/Bell Pepper Green.png';
import item25 from '../files/product-images/Bell Pepper Yellow.png';
import item26 from '../files/product-images/Thumba Karawila.png';
import item27 from '../files/product-images/Onion Leaves.png';
import item28 from '../files/product-images/Cauliflower.png';
import item29 from '../files/product-images/ginger.png';
import item30 from '../files/product-images/Winged bean-dambala.png';
import itempTemp from '../files/product-images/tempProductImage.png'

export const ProductContext = createContext();

function ProductContextProvider (props){
    
    const [products, setProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [productSelected, setProductSelected] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const productArr = [itempTemp, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20, item21, item22, item23, item24, item25, item26, item27, item28, item29, item30 ];
    

    useEffect(() =>{
        axios.get('http://localhost:4000/products')
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
