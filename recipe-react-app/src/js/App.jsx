import '../scss/App.scss';
import Layout from './pages/Layout';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CreateRecipe from './pages/CreateRecipe';
import Recipes from './pages/Recipes';
import DetailRecipe from './components/DetailRecipe';
import NotFoundPage from './components/FehlerRoute';
import Home from './pages/Home';


function App() {

  // TODO STYLES 


  
  return (
    <div className="App min-h-screen w-screen ">
      <div className='container mx-auto min-h-screen min-w-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>} >

              <Route index  element={<Home />} ></Route>

              <Route path='/recipes'  element={<Recipes />}></Route>

              <Route path="/create-recipe" element={<CreateRecipe/>} ></Route>
              <Route path="/details/:id" element={<DetailRecipe />} ></Route>

              <Route path="*" element={<NotFoundPage />}></Route>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
