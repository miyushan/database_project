import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const EmployeeContext = createContext();

function EmployeeContextProvider (props){
    
    const [deliveryPersons, setDeliveryPersons] = useState([]);
    const [managers, setManagers] = useState([]);
    // const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost/database_project/get_DeliveryPerson_details.php')
        .then (res =>{
            setDeliveryPersons(res.data);
            axios.get('http://localhost/database_project/get_Manager_details.php')
            .then (res =>{
                setManagers(res.data);
            })
        })
    },[])

    return (
        <EmployeeContext.Provider value={{ deliveryPersons, managers }}>
            {props.children}
        </EmployeeContext.Provider>
    );
    
}
 
export default EmployeeContextProvider;
