import React, { useState } from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';
// import Loginapp from './components/Loginapp';
import Signup from './components/Loginapp/Signup';
import Login from './components/Loginapp/Login';
import ForgotPassword from './components/Loginapp/ForgotPassword';
import { AuthProvider } from './components/contexts/AuthContext';

import { initializeApp } from 'firebase/app';


import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebase'


function App() {

  return (
    <React.Fragment>
      <Navbar />
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          {/* <Route path="/login" component={Loginapp} /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
              
          
          <Route component={Default} />
        </Switch>
        </AuthProvider>
      <Modal />
    </React.Fragment>
  );
}

export default App;
