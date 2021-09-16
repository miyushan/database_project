import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import DataBaseLoginpage from './Pages/DataBaseLoginpage';
import CreateAccountpage from './Pages/CreateAccountpage';
import Cartpage from './Pages/Cartpage';
import AboutUspage from './Pages/AboutUspage';
import ContactUspage from './Pages/ContactUspage';
import Branchespage from './Pages/Branchespage';
import Productspage from './Pages/Productspage';
import ProductDetails from './DB_data/Product/ProductDetails';
import EditProduct from './DB_data/Product/EditProduct';
import NewProduct from './DB_data/Product/NewProduct';
import CustomerDetails from './DB_data/Customer/CustomerDetails';
import EditCustomer from './DB_data/Customer/EditCustomer';
import DeliveryPersonDetails from './DB_data/DeliveryPerson/DeliveryPersonDetails';
import EditDeliveryPerson from './DB_data/DeliveryPerson/EditDeliveryPerson';
import NewDeliveryPerson from './DB_data/DeliveryPerson/NewDeliveryPerson';
import ManagerDetails from './DB_data/Manager/ManagerDetails';
import EditManager from './DB_data/Manager/EditManager';
import NewManager from './DB_data/Manager/NewManager';
import BranchDetails from './DB_data/Branch/BranchDetails';
import EditBranch from './DB_data/Branch/EditBranch';
import NewBranch from './DB_data/Branch/NewBranch';
import OrdersDetails from './DB_data/Orders/OrdersDetails';

// import { UserContext } from './Context/UserContext';

function Routes(){

  return(
    <>
    
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Loginpage} /> 
          <Route path="/login" exact component={Loginpage} /> 
          <Route path="/db/login" exact component={DataBaseLoginpage} /> 
          <Route path="/contact-us" exact component={ContactUspage} /> 
          <Route path="/home" exact component={Homepage} /> 
          <Route path="/register" exact component={CreateAccountpage} /> 
          <Route path="/cart" exact component={Cartpage} /> 
          <Route path="/about-us" exact component={AboutUspage} /> 

          <Route path="/products" exact component={Productspage} /> 

          <Route path="/branches" exact component={Branchespage} /> 
          <Route path="/db/products" exact component={ProductDetails}/> 
          <Route path="/db/products/edit/:id" exact component={EditProduct} /> 
          <Route path="/db/products/add" exact component={NewProduct} /> 
          <Route path="/db/customer" exact component={CustomerDetails} /> 
          <Route path="/db/customer/edit" exact component={EditCustomer} /> 
          <Route path="/db/delivery-person" exact component={DeliveryPersonDetails} /> 
          <Route path="/db/delivery-person/edit/:id" exact component={EditDeliveryPerson} /> 
          <Route path="/db/delivery-person/add" exact component={NewDeliveryPerson} /> 
          <Route path="/db/manager" exact component={ManagerDetails} /> 
          <Route path="/db/manager/edit/:id" exact component={EditManager} /> 
          <Route path="/db/manager/add" exact component={NewManager} /> 
          <Route path="/db/branch" exact component={BranchDetails} /> 
          <Route path="/db/branch/edit/:id" exact component={EditBranch} /> 
          <Route path="/db/branch/add" exact component={NewBranch} /> 
          <Route path="/db/order" exact component={OrdersDetails} /> 

        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default Routes;