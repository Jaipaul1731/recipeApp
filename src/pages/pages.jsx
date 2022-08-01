import React from 'react'
import HomePage from './homePage';
import {Route,Routes} from 'react-router-dom';
import Cuisine from './cuisine';
import Searched from './Searched';
import Recipes from './Recipes';


function Pages() {
  return (
    
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/cuisine/:type' element={ <Cuisine/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/recipe/:name' element={<Recipes/>}/>
      </Routes>
      
  )
}

export default Pages;