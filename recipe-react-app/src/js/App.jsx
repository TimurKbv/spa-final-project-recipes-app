import { useEffect, useState } from 'react';
import '../scss/App.scss';
import axios from 'axios';
import Layout from './pages/Layout';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CreateRecipe from './pages/CreateRecipe';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import DetailRecipe from './components/DetailRecipe';


function App() {

  return (
    <div className="App">
      <div className='container mx-auto'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>} >

              <Route index element={<Home/>}></Route>
              <Route path="/favourites" element={<Favourites/>} ></Route>
              <Route path="/search" element={<Search/>} ></Route>
              <Route path="/create-recipe" element={<CreateRecipe/>} ></Route>
              <Route path="/details/:id" element={<DetailRecipe/>} ></Route>
              <Route path="*" element={<><h1>404</h1><h2>Page not found</h2></>}></Route>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
