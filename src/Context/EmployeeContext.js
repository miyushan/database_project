import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const EmployeeContext = createContext();

function EmployeeContextProvider (props){
    
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

    return (
        <EmployeeContext.Provider value={{products, productSelected, selectedItems, handleAddProduct}}>
            {props.children}
        </EmployeeContext.Provider>
    );
    
}
 
export default EmployeeContextProvider;
