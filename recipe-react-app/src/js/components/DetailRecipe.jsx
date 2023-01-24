import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DEFAULT_BUTTON_STYLES } from "./DisplayRecipes";
import EditForm from "./EditForm";
import DetailsList from "./DetailsList";
import { useNavigate } from "react-router-dom";



export const RECIPES_URL = "http://localhost:8080/recipes/";

function DetailRecipe({removeRecipe}) {
  const [isLoading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const [isEditClicked, setEditClicked] = useState(false);
  const navigate = useNavigate();

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

// Erzeuge entweder unordentliche Liste oder bei "edit button" click eine Form 
  let editedData = useMemo(() => {

    if (isEditClicked) {
      return (
        <EditForm recipe={recipe} setRecipe={setRecipe} setEditClicked={setEditClicked} />
      )
    } else {
      return (
        <DetailsList recipe={recipe}/>
      )
    }
  }, [isEditClicked, recipe]);

/* -------------------------------DELETE FUNKTION KANN MAN OPTIMIEREN------------------------ */
function removeRecipe(recipe) {
  console.log(recipe);
  // delete
  axios
  .delete("http://localhost:8080/recipes/" + id)
  .then((res) => {
    navigate("/recipes", {replace: true});
  })
  .catch((err) => {
  // behandle fehler vom User
  console.error(err);
  }); 
}
/* -------------------------------------------------------------------------------------------- */

  return (
    <>
      {isLoading ? (
        <div className="container flex justify-center items-center w-screen h-auto"><h2 className="text-5xl">LOADING...</h2></div>
      ) : (
        <div className="container flex flex-col mt-10 items-center w-screen h-auto">
          <div  className="container flex flex-col  w-full px-10 ">
            {/* IMAGE CONTAINER */}
            <div className="image-container w-1/2 mb-10">
              <img
                src={recipe.picture}
                alt="Picture Image"
                className="w-full max-h-full object-cover "
              />
            </div>
            {/* BESCHREIBUNG */}
            {editedData}
          </div>
          {/* BUTTONS */}
          <div className="btns flex justify-center p-10 gap-5 ">
              <button onClick={() => setEditClicked(true)}  className={`${DEFAULT_BUTTON_STYLES}  bg-gray-200 hover:text-white`}>
                Edit recipe
              </button>
              <button disabled className={`${DEFAULT_BUTTON_STYLES} bg-gray-200 hover:text-white`}>
                Add to Favourites
              </button>
              <button 
              onClick={removeRecipe}
              className={`${DEFAULT_BUTTON_STYLES} bg-gray-200 hover:text-white`}>
                Delete recipe
              </button>
              
            </div>
        </div>
      )}
    </>
  );
}

export default DetailRecipe;
