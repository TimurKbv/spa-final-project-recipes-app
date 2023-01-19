import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DEFAULT_BUTTON_STYLES } from "./DisplayRecipes";

export const RECIPES_URL = "http://localhost:8080/recipes/";

function DetailRecipe() {
  const [isLoading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    (async function fetchData() {
      let fetchURL = RECIPES_URL + id;
      try {
        // RECIPE nach ID fetchen
        let data = await (await axios.get(fetchURL)).data;
        // in der recipestate speichern
        setRecipe(data);
      } catch (error) {
        // Log Error
        console.error(error);
      } finally {
        // Loading Completed
        setLoading(false);
      }
    })();
  }, []);

  function name(params) {
    
  }

  return (
    <>
      {isLoading ? (
        <div className="container flex justify-center items-center w-screen h-screen"><h2 className="text-5xl">LOADING...</h2></div>
      ) : (
        <div className="container flex justify-center items-center w-screen h-screen">
          <div  className="container flex flex-col max-w-lg h-lg">
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
                <h4 className="text-opacity-100">
                  Category: {recipe.category}
                </h4>
              </li>
              <li>
                <h4>Country: {recipe.country}</h4>
              </li>
              <li>
                <h4>Cooktime: {recipe.cooktime}</h4>
              </li>
              <li>
                <h4>Description</h4>
                <p>{recipe.description}</p>
              </li>
              <li>
                <h4>Ingredients</h4>
                <p>{recipe.ingredients}</p>
              </li>
              <li>
                <h4>Procedure</h4>
                <p>{recipe.procedure}</p>
              </li>
            </ul>
            <button  className={DEFAULT_BUTTON_STYLES}>
              Edit recipe
              
            </button>
            <button className={DEFAULT_BUTTON_STYLES}>
              Add to Favourites
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailRecipe;
