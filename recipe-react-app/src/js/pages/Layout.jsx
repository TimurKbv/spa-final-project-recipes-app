import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <h1 className="text-4xl text-center py-9">Recipe React App</h1>
      <nav className="bg-gray-900 p-4">
        <ul className="flex justify-evenly text-3xl text-gray-200 font-bold text-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/create-recipe">Create recipe</Link>
          </li>
        </ul>

      </nav>

      <Outlet/>
    </>
  );
}

export default Layout;
