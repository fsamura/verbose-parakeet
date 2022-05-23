import React from 'react';
import ReactDOM from 'react-dom/client';
// pre-defind files
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "popper.js/dist/umd/popper";
import "font-awesome/css/font-awesome.css";
// users defind files
// import App from './App';
// import Customers from './Customers';
import "./index.css";
import NavBar from './NavBar';
import ShoppingCart from './ShoppingCart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <NavBar />
    <ShoppingCart />
  </React.StrictMode>
);