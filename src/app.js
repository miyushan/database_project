import React, { useState} from 'react';
// import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

export default function App(){

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    console.log(product);

    const obj = {
      id: product.id,
      name: product.Name
    }

    const newArr = cartItems.concat(obj)
    setCartItems([cartItems, newArr]);
    console.log(newArr);
    console.log(cartItems);

  }

  return(
    <div>
      <Router>
        <Routes cartItems={cartItems} handleAddProduct={handleAddProduct}/>
      </Router>
    </div>
  )
}
