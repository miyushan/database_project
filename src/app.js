import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

export default function App(){

  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get('http://localhost/database_project/get_Product_details.php')
      .then (res =>{
          setProducts(res.data)
      })
  }, []);

  return(
    <div>
      <Router>
        <Routes products={products}/>
      </Router>
    </div>
  )
}
