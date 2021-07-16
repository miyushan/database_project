import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import CreateAccountpage from './Pages/CreateAccountpage';
import Cartpage from './Pages/Cartpage';

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
        </Switch>
        <Route path="/" component={Loginpage} />
      </BrowserRouter>
    </>
  );
}

export default App;