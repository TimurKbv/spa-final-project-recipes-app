import React, { useState } from "react";
import { Link } from "react-router-dom";


export const DEFAULT_BUTTON_STYLES =
  "mx-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded inline-flex items-center text-center";

function DisplayRecipes({ recipes, removeRecipe }) {
  console.log(recipes);

  let displayRecipes = recipes.map((recipe) => {

    return (
      <div key={recipe.id} className="flex items-center flex-col gap-3 bg-gray-200 p-5 rounded-3xl shadow-2xl hover:bg-white hover:translate-y-1 transition-all ">
        <div className="w-full h-48 img-container">
          <img
            src={recipe.picture}
            alt="Picture Image"
            className="w-full h-full  object-cover"
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
        <div className="flex flex-col gap-3 justify-evenly w-full text-sm">
          {/* ADD BUTTON */}
          
          <div className="flex gap-5 flex-wrap">

                        {/* Link zur Details */}
            <Link
              to={"/details/" + recipe.id}
              className={`${`${DEFAULT_BUTTON_STYLES} hover:text-white`} text-center `}
            >
              Details
            </Link>
            {/* TO FAV'S erstmal DISABLED */}
            {<button disabled className={`${DEFAULT_BUTTON_STYLES} hover:text-white`}>To Favourites</button>}
            {/* DELETE BUTTON */}
            <button
            onClick={(evt) =>removeRecipe(recipe)}
            className={`${DEFAULT_BUTTON_STYLES} hover:text-white`}>Delete</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
    {/* wenn Rezepte da sind - zeig Rezepte, ansonsten H2 "Recipes not found" */}
      {recipes.length > 0 ? (
        displayRecipes
      ) : (
        <div className=" col-span-2  flex justify-center items-center   p-5">
          <h2 className="text-center text-4xl">Recipes not found</h2>
        </div>
      )}
    </>
  );
}

export default DisplayRecipes;
