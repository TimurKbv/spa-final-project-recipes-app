import React from "react";
import { Link } from "react-router-dom";

export const DEFAULT_BUTTON_STYLES = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";

function DisplayRecipes({recipes }) {
    console.log(recipes);

    let displayRecipes = recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="flex flex-col gap-3 bg-gray-500 p-5">
            <img
              src={recipe.picture}
              alt="Picture Image"
              className="w-full h-2/3 object-cover"
            />
            <ul className="w-full h-full flex flex-col gap-2">
              <li>
                <h3 className="font-bold text-center ">{recipe.title}</h3>
              </li>
              <li>
                <h4 className="text-opacity-100">Category: {recipe.category}</h4>
              </li>
              <li>
                <h4>Country: {recipe.country}</h4>
              </li>

            </ul>
            {/* ADD BUTTON */}
            <button className={DEFAULT_BUTTON_STYLES}>
              Add to Favourites
            </button>
            {/* Link zur Details */}
            <Link
              to={"/details/" + recipe.id}
              className={`${DEFAULT_BUTTON_STYLES} text-center`}
            >
              Details
            </Link>
          </div>
        );
      });

    return (
        <>
        {recipes.length > 0 ? displayRecipes : <div className=" col-span-2  flex justify-center items-center   p-5">
            <h2 className="text-4xl">Recipes not found</h2>
          </div>}
        </>
    )
}

export default DisplayRecipes;