import '../scss/App.scss';
import Layout from './pages/Layout';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CreateRecipe from './pages/CreateRecipe';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import Recipes from './pages/Recipes';
import DetailRecipe from './components/DetailRecipe';
import NotFoundPage from './components/FehlerRoute';
import Home from './pages/Home';


function App() {

  // TODO STYLES NotFoundPage | AXIOS PARAMS ERSTELLEN | Create Recipe / Edit Recipe | REDIRECT

  return (
    <div className="App">
      <div className='container mx-auto'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>} >

              <Route index  element={<Home/>} ></Route>

              <Route path='/recipes'  element={<Recipes/>}></Route>

              <Route path="/favourites" element={<Favourites/>} ></Route>
              <Route path="/search" element={<Search/>} ></Route>
              <Route path="/create-recipe" element={<CreateRecipe/>} ></Route>
              <Route path="/details/:id" element={<DetailRecipe/>} ></Route>

              <Route path="*" element={<NotFoundPage />}></Route>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
