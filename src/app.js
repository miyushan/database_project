import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductContextProvider from '../src/Context/ProductContext';
import CartContextProvider from '../src/Context/CartContext';
import UserContextProvider from '../src/Context/UserContext';
import EmployeeContextProvider from '../src/Context/EmployeeContext';

import Routes from './Routes';

export default function App(){

  return(
    <div>
      <Router>
        <EmployeeContextProvider>
          <UserContextProvider>
            <CartContextProvider>
              <ProductContextProvider>
                <Routes />
              </ProductContextProvider>
            </CartContextProvider>
          </UserContextProvider>
        </EmployeeContextProvider>
      </Router>
    </div>
  )
}
