import React from 'react';
import { Route, Routes } from "react-router-dom";

import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import DataBaseLoginpage from './Pages/DataBaseLoginpage';
import CreateAccountpage from './Pages/CreateAccountpage';
import Cartpage from './Pages/Cartpage';
import AboutUspage from './Pages/AboutUspage';
// import ContactUspage from './Pages/ContactUspage';
// import Branchespage from './Pages/Branchespage';
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

function RouteFunction() {

  return (
    <>

      <Routes>

        <Route path="/" element={<Loginpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<CreateAccountpage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/about-us" element={<AboutUspage />} />
        <Route path="/products" element={<Productspage />} />
        {/* <Route path="/contact-us" element={ContactUspage} /> */}
        {/* <Route path="/branches" element={Branchespage} /> */}

        <Route path="/db" element={<DataBaseLoginpage />} />
        <Route path="/db/login" element={<DataBaseLoginpage />} />
        <Route path="/db/products" element={<ProductDetails />} />
        <Route path="/db/products/edit/:id" element={<EditProduct />} />
        <Route path="/db/products/add" element={<NewProduct />} />
        <Route path="/db/customer" element={<CustomerDetails />} />
        <Route path="/db/customer/edit/:id" element={<EditCustomer />} />
        <Route path="/db/employee" element={<EmployeeDetails />} />
        <Route path="/db/employee/edit/:id" element={<EditEmployee />} />
        <Route path="/db/employee/add" element={<NewEmployee />} />
        <Route path="/db/branch" element={<BranchDetails />} />
        <Route path="/db/branch/edit/:id" element={<EditBranch />} />
        <Route path="/db/branch/add" element={<NewBranch />} />
        <Route path="/db/order" element={<OrdersDetails />} />
        <Route path="/db/order-items" element={<OrderItemsDetails />} />
        {/* <Route path="/db/delivery-person"  element={DeliveryPersonDetails} /> 
          <Route path="/db/delivery-person/edit/:id" element={EditDeliveryPerson} /> 
        <Route path="/db/delivery-person/add" element={NewDeliveryPerson} />  */}
        {/* <Route path="/db/manager"  element={ManagerDetails} /> 
          <Route path="/db/manager/edit/:id" element={EditManager} /> 
        <Route path="/db/manager/add" element={NewManager} />  */}

        <Route path="*" element={<Loginpage />} />
      </Routes>

    </>
  );
}

export default RouteFunction;