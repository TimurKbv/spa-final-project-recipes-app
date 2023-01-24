import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      
      <nav className=" p-4 nav-bar flex">
        <img className="object-cover w-40" src="https://www.haco.de/wp-content/themes/hacobecolorful/assets/svg/rezeptwelt-schwarz.svg" alt="" />
        <ul className="flex justify-evenly w-full items-center text-3xl text-black font-bold text-center">
          <li>
            <Link to="/">Home</Link>
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
