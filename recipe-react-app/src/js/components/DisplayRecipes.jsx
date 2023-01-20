import React from "react";
import { Link } from "react-router-dom";

export const DEFAULT_BUTTON_STYLES =
  "mx-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded inline-flex items-center text-center";

function DisplayRecipes({ recipes }) {
  console.log(recipes);

  let displayRecipes = recipes.map((recipe) => {
    return (
      <div key={recipe.id} className="flex items-center flex-col gap-3 bg-gray-500 p-5 rounded-xl">
        <div className="w-2/3 h-1/2 ">
          <img
            src={recipe.picture}
            alt="Picture Image"
            className="w-full h-full object-cover"
          />
        </div>
        <ul className="w-full h-full flex flex-col gap-2">
          <li>
            <h3 className="font-bold  ">{recipe.title}</h3>
          </li>
          <li>
            <h4 className="text-opacity-100">Category: {recipe.category}</h4>
          </li>
          <li>
            <h4>Country: {recipe.country}</h4>
          </li>
        </ul>
        <div className="flex flex-col gap-3 justify-evenly w-full">
          {/* ADD BUTTON */}
          <button className={DEFAULT_BUTTON_STYLES}>Add to Favourites</button>
          <div className="flex">
                        {/* Link zur Details */}
            <Link
              to={"/details/" + recipe.id}
              className={`${DEFAULT_BUTTON_STYLES} text-center `}
            >
              Details
            </Link>
            {/* DELETE BUTTON */}
            <button className={DEFAULT_BUTTON_STYLES}>Remove</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {recipes.length > 0 ? (
        displayRecipes
      ) : (
        <div className=" col-span-2  flex justify-center items-center   p-5">
          <h2 className="text-4xl">Recipes not found</h2>
        </div>
      )}
    </>
  );
}

export default DisplayRecipes;
