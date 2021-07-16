import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import CreateAccountpage from './Pages/CreateAccountpage';


ReactDOM.render(
  <React.StrictMode>
    <CreateAccountpage />
    <div className="space" style={{height: '100px'}}></div>
    <Loginpage />
    <div className="space" style={{height: '100px'}}></div>
    <Homepage />
  </React.StrictMode>,
  document.getElementById('root')
);

