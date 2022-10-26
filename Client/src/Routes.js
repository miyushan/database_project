import React from 'react';
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
// import DeliveryPersonDetails from './DB_data/DeliveryPerson/DeliveryPersonDetails';
// import EditDeliveryPerson from './DB_data/DeliveryPerson/EditDeliveryPerson';
// import NewDeliveryPerson from './DB_data/DeliveryPerson/NewDeliveryPerson';
// import ManagerDetails from './DB_data/Manager/ManagerDetails';
// import EditManager from './DB_data/Manager/EditManager';
// import NewManager from './DB_data/Manager/NewManager';
import EmployeeDetails from './DB_data/Employee/EmployeeDetails';
import EditEmployee from './DB_data/Employee/EditEmployee';
import NewEmployee from './DB_data/Employee/NewEmployee';
import BranchDetails from './DB_data/Branch/BranchDetails';
import EditBranch from './DB_data/Branch/EditBranch';
import NewBranch from './DB_data/Branch/NewBranch';
import OrdersDetails from './DB_data/Orders/OrdersDetails';
import OrderItemsDetails from './DB_data/OrderItems/OrderItemsDetails';

// import { UserContext } from './Context/UserContext';

function Routes() {

  return (
    <>

      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Loginpage} />
          <Route path="/login" component={Loginpage} />
          <Route path="/db/login" component={DataBaseLoginpage} />
          <Route path="/contact-us" component={ContactUspage} />
          <Route path="/home" component={Homepage} />
          <Route path="/register" component={CreateAccountpage} />
          <Route path="/cart" component={Cartpage} />
          <Route path="/about-us" component={AboutUspage} />

          <Route path="/products" component={Productspage} />

          <Route path="/branches" component={Branchespage} />
          <Route path="/db/products" exact component={ProductDetails} />
          <Route path="/db/products/edit/:id" component={EditProduct} />
          <Route path="/db/products/add" component={NewProduct} />
          <Route path="/db/customer" exact component={CustomerDetails} />
          <Route path="/db/customer/edit/:id" component={EditCustomer} />
          {/* <Route path="/db/delivery-person" component={DeliveryPersonDetails} /> 
          <Route path="/db/delivery-person/edit/:id" component={EditDeliveryPerson} /> 
          <Route path="/db/delivery-person/add" component={NewDeliveryPerson} />  */}
          {/* <Route path="/db/manager" component={ManagerDetails} /> 
          <Route path="/db/manager/edit/:id" component={EditManager} /> 
          <Route path="/db/manager/add" component={NewManager} />  */}
          <Route path="/db/employee" exact component={EmployeeDetails} />
          <Route path="/db/employee/edit/:id" component={EditEmployee} />
          <Route path="/db/employee/add" component={NewEmployee} />
          <Route path="/db/branch" exact component={BranchDetails} />
          <Route path="/db/branch/edit/:id" component={EditBranch} />
          <Route path="/db/branch/add" component={NewBranch} />
          <Route path="/db/order" component={OrdersDetails} />
          <Route path="/db/order-items" component={OrderItemsDetails} />

        </Switch>
      </BrowserRouter>

    </>
  );
}

export default Routes;