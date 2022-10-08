import {Routes,Route} from "react-router-dom"

import './App.css';


import React from 'react';
import Header from './components/Header';
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";



const App = ()=> {
  return (

    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Buy></Buy>}></Route>
        <Route path="/" element={<Sell></Sell>}></Route>
      </Routes>
    </div>

  );
}

export default App;
