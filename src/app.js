import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import CreateAccountpage from './Pages/CreateAccountpage';
import Cartpage from './Pages/Cartpage';
import AboutUspage from './Pages/AboutUspage';
import ContactUspage from './Pages/ContactUspage';
import Branchespage from './Pages/Branchespage';
import Productspage from './Pages/Productspage';

function App(){
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Loginpage} />
          <Route path="/home" exact component={Homepage} />
          <Route path="/login" exact component={Loginpage} />
          <Route path="/register" exact component={CreateAccountpage} />
          <Route path="/cart" exact component={Cartpage} />
          <Route path="/about-us" exact component={AboutUspage} />
          <Route path="/contact-us" exact component={ContactUspage} />
          <Route path="/products" exact component={Productspage} />
          <Route path="/branches" exact component={Branchespage} />
          <Route path='*' component={Loginpage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;