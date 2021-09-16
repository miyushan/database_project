import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const EmployeeContext = createContext();

function EmployeeContextProvider (props){
    
    const [deliveryPersons, setDeliveryPersons] = useState([]);
    const [managers, setManagers] = useState([]);
    const [branches, setBranches] = useState([]);
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    // const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost/database_project/get_DeliveryPerson_details.php')
        .then (res =>{
            setDeliveryPersons(res.data);
            axios.get('http://localhost/database_project/get_Manager_details.php')
            .then (res =>{
                setManagers(res.data);
                axios.get('http://localhost/database_project/get_Branch_details.php')
                .then (res =>{
                    setBranches(res.data);
                    axios.get('http://localhost/database_project/get_Orders_details.php')
                    .then (res =>{
                        setOrders(res.data);
                        axios.get('http://localhost/database_project/get_Customer_details.php')
                        .then (res =>{
                            setCustomers(res.data);
                        })
                    })
                })
            })
        })
    },[])

    return (
        <EmployeeContext.Provider value={{ deliveryPersons, managers, branches, orders, customers }}>
            {props.children}
        </EmployeeContext.Provider>
    );
    
}
 
export default EmployeeContextProvider;
