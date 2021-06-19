import React, { useState } from 'react';
import {Route,Switch} from 'react-router-dom';
import Register from './components/register/Register';
import Login  from './components/login/login';
import './App.css';
import Home from './components/Home_main/Home';
import Main from './components/Main';
const  App = () => {
  console.log('window');
  return (
    <>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/register' component={Register}></Route>
      <Route exact path='/dashboard' component={Main}></Route>   
      </Switch>
      {/* <Dashboard/> */}
    </>
  );
}

export default App;
