import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
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

// import { UserContext } from './Context/UserContext';

function Routes(){
  // const { isLogedIn } = useContext(UserContext);
  const [isLogedIn] = useState(true);

  const logedin = () => {
    return(
      <BrowserRouter>
        <Switch>

          <Route path="/" exact><Loginpage /></Route>
          <Route path="/login" exact><Loginpage /></Route>
          <Route path="/contact-us" exact><ContactUspage /></Route>
          <Route path="/home" exact><Homepage /></Route>
          <Route path="/register" exact><CreateAccountpage /></Route>
          <Route path="/cart" exact><Cartpage /></Route>
          <Route path="/about-us" exact><AboutUspage /></Route>

          <Route path="/products" exact><Productspage /></Route>

          <Route path="/branches" exact><Branchespage /></Route>
          <Route path="/db/products" exact><ProductDetails/></Route>
          <Route path="/db/products/edit" exact><EditProduct /></Route>
          <Route path="/db/products/add" exact><NewProduct /></Route>
          <Route path="/db/customer" exact><CustomerDetails /></Route>
          <Route path="/db/customer/edit" exact><EditCustomer /></Route>
          <Route path="/db/delivery-person" exact><DeliveryPersonDetails /></Route>
          <Route path="/db/delivery-person/edit" exact><EditDeliveryPerson /></Route>
          <Route path="/db/delivery-person/add" exact><NewDeliveryPerson /></Route>
          <Route path="/db/manager" exact><ManagerDetails /></Route>
          <Route path="/db/manager/edit" exact><EditManager /></Route>
          <Route path="/db/manager/add" exact><NewManager /></Route>
          <Route path="/db/branch" exact><BranchDetails /></Route>
          <Route path="/db/branch/edit" exact><EditBranch /></Route>
          <Route path="/db/branch/add" exact><NewBranch /></Route>

        </Switch>
      </BrowserRouter>
    )
  }

  const notLogedin = () => {
    return(
      <BrowserRouter>
        <Switch>

          <Route path="/" exact><Loginpage /></Route>
          <Route path="/login" exact><Loginpage /></Route>
          <Route path="/register" exact><CreateAccountpage /></Route>
          <Route path="/cart" exact><Cartpage /></Route>
          <Route path="*" ><Loginpage /></Route>
          {/* <Route path="/" exact><Loginpage /></Route>
          <Route path="/login" exact><Loginpage /></Route>
          <Route path="/contact-us" exact><ContactUspage /></Route>
          <Route path="/home" exact><Homepage /></Route>
          <Route path="/register" exact><CreateAccountpage /></Route>
          <Route path="/cart" exact><Cartpage /></Route>
          <Route path="/about-us" exact><AboutUspage /></Route>
          <Route path="/products" exact><Productspage /></Route>
          <Route path="/branches" exact><Branchespage /></Route>
          <Route path="/db/products" exact><ProductDetails/></Route>
          <Route path="/db/products/edit" exact><EditProduct /></Route>
          <Route path="/db/products/add" exact><NewProduct /></Route>
          <Route path="/db/customer" exact><CustomerDetails /></Route>
          <Route path="/db/customer/edit" exact><EditCustomer /></Route>
          <Route path="/db/delivery-person" exact><DeliveryPersonDetails /></Route>
          <Route path="/db/delivery-person/edit" exact><EditDeliveryPerson /></Route>
          <Route path="/db/delivery-person/add" exact><NewDeliveryPerson /></Route>
          <Route path="/db/manager" exact><ManagerDetails /></Route>
          <Route path="/db/manager/edit" exact><EditManager /></Route>
          <Route path="/db/manager/add" exact><NewManager /></Route>
          <Route path="/db/branch" exact><BranchDetails /></Route>
          <Route path="/db/branch/edit" exact><EditBranch /></Route>
          <Route path="/db/branch/add" exact><NewBranch /></Route> */}

        </Switch>
      </BrowserRouter>
    )
  }


  return(
    <>
    
      {isLogedIn? logedin() : notLogedin()}
      
    </>
  );
}

export default Routes;