import React from 'react';
import './App.css'
import Home from './pages/Home';
import {  Routes,  Route, BrowserRouter } from "react-router-dom";
import Conocer from './layout/Conocer';
import Conocenos from './pages/Conocenos';

import Elige from './pages/Elige';
import Elegir from './layout/Elegir';

import Propone from './pages/Propone';
import Proponer from './layout/Proponer';

function App(){
    return (
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>         	 

          <Route path="/conocenos" element={<Conocer/>}>
          <Route index element={<Conocenos/>}/>	
          </Route>

           <Route path="/elige" element={<Elegir/>}>
          <Route index element={<Elige/>}/>	
          </Route> 

          <Route path="/propone" element={<Proponer/>}>
          <Route index element={<Propone/>}/>	
          </Route> 
        </Routes>
      </BrowserRouter> 
      
    )
}
export default App;