import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DEFAULT_BUTTON_STYLES } from "./DisplayRecipes";
import EditForm from "./EditForm";
import DetailsList from "./DetailsList";

export const RECIPES_URL = "http://localhost:8080/recipes/";

function DetailRecipe() {
  const [isLoading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const [isEditClicked, setEditClicked] = useState(false);


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


  let editedData = useMemo(() => {
    console.log(isEditClicked);
    console.log(recipe);
    if (isEditClicked) {
      return (
        <EditForm recipe={recipe} setRecipe={setRecipe} setEditClicked={setEditClicked} />
      )
    } else {
      return (
        <DetailsList recipe={recipe}/>
      )
    }
  }, [isEditClicked, recipe])

  function handleEdit() {
    setEditClicked(true);
    console.log(editedData);
    console.log(isEditClicked);
  }

  return (
    <>
      {isLoading ? (
        <div className="container flex justify-center items-center w-screen h-screen"><h2 className="text-5xl">LOADING...</h2></div>
      ) : (
        <div className="container flex flex-col my-32 items-center w-screen h-screen">
          <div  className="container flex  w-full px-10">
            {/* IMAGE CONTAINER */}
            <div className="image-container w-1/2 ">
              <img
                src={recipe.picture}
                alt="Picture Image"
                className="w-full  object-cover"
              />
            </div>
            {/* BESCHREIBUNG */}

            {editedData}

            {/* <DetailsList recipe={recipe} /> */}
            {/* <ul className=" h-full flex flex-col gap-2 px-10 details-list">
              <li className="">
                <h2 className="font-bold text-xl ">{recipe.title}</h2>
              </li>
              <li>
                <h4 >
                  <span>Category:</span> {recipe.category}
                </h4>
              </li> 
              <li>
                <h4 ><span>Country:</span> {recipe.country}</h4>
              </li>
              <li>
                <h4 ><span>Cooktime:</span> {recipe.cooktime}</h4>
              </li>
              <li>
                <h4 ><span>Ingredients</span></h4>
                <p >{recipe.ingredients}</p>
              </li>
              <li>
                <h4 ><span>Description</span></h4>
                <p >{recipe.description}</p>
              </li>
              <li>
                <h4><span>Procedure</span></h4>
                <p > {recipe.procedure}</p>
              </li>
            </ul> */}
          </div>
          {/* BUTTONS */}
          <div className="btns flex justify-center p-10 gap-5">
              <button onClick={handleEdit}  className={DEFAULT_BUTTON_STYLES}>
                Edit recipe
              </button>
              <button className={`${DEFAULT_BUTTON_STYLES}  bg-green-600`}>
                Add to Favourites
              </button>
              <button className={`${DEFAULT_BUTTON_STYLES} bg-red-500`}>
                Delete recipe
              </button>
            </div>
        </div>
      )}
    </>
  );
}

export default DetailRecipe;
