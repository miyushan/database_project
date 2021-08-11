import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

export default function App(){

  const [products, setProducts] = useState([]);
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



    // const productExist = cartItems.find((item) => item.id === product.id);
    // // setCartItems([{}]);
    // console.log(productExist);

    // if(productExist) {
    //   setCartItems(cartItems.map((item)=>item.id === products.id ?
    //   { ...productExist, quantity: productExist.quantity + 1 } : item ));
    // }else{
    //   setCartItems([...cartItems, {...product, quantity: 1}]);
    // }
  }

  useEffect(() => {
      axios.get('http://localhost/database_project/get_Product_details.php')
      .then (res =>{
          setProducts(res.data)
      })
  }, []);

  return(
    <div>
      <Router>
        <Routes products={products} cartItems={cartItems} handleAddProduct={handleAddProduct}/>
      </Router>
    </div>
  )
}
